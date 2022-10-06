import { renderWithTheme } from '../../../../styles/theme.test.utils';
import {
  construirBeneficiario,
  construirContrato,
  construirDetallesDeContrato,
  constuirInstitucion,
} from '../../../Models/contratos.model';
import { Tarjeta } from './Tarjeta';

describe('Specs de Tarjeta', () => {
  describe('El Header', () => {
    it('Renderiza el coste total de los beneficiarios', () => {
      const contrato = construirContrato({
        detalles: construirDetallesDeContrato({
          beneficiarios: [
            construirBeneficiario({
              coste: 10,
              nombre: 'Beneficiario irrelevante1',
            }),
            construirBeneficiario({
              coste: 10,
              nombre: 'Beneficiario irrelevante2',
            }),
          ],
        }),
      });
      const { getByLabelText } = renderWithTheme(<Tarjeta contrato={contrato} />);

      const nonBreakableSpace = '&nbsp;';
      expect(getByLabelText('coste total').innerHTML).toEqual(`20,00${nonBreakableSpace}€`);
    });

    it('Renderiza la fecha del contrato', () => {
      const contrato = construirContrato({ fechaPub: '2021/11/13' });
      const { getByText } = renderWithTheme(<Tarjeta contrato={contrato} />);

      expect(getByText(/2021-11-13/i)).toBeInTheDocument();
    });
  });

  describe('La Institución', () => {
    it('Renderiza una tarjeta con los datos de una institución', () => {
      const contrato = construirContrato({
        fechaPub: '2021/11/13',
        detalles: construirDetallesDeContrato({
          institucion: constuirInstitucion({
            actividad: 'Actividad irrelevante',
            nombre: 'Institucion irrelevante',
          }),
          descripcion: 'Contrato irrelevante',
        }),
      });
      const { getByText } = renderWithTheme(<Tarjeta contrato={contrato} />);

      expect(getByText(/contrato irrelevante/i)).toBeInTheDocument();
      expect(getByText(/actividad irrelevante/i)).toBeInTheDocument();
      expect(getByText(/institucion irrelevante/i)).toBeInTheDocument();
    });
  });

  describe('Los Beneficiarios', () => {
    it('Renderiza una tarjeta con los datos de un contrato con varios beneficiarios', () => {
      const contrato = construirContrato({
        detalles: construirDetallesDeContrato({
          beneficiarios: [
            construirBeneficiario({
              coste: 10,
              nombre: 'Beneficiario irrelevante1',
              descripcion: 'Descripcion irrelevante1',
            }),
            construirBeneficiario({
              coste: 10,
              nombre: 'Beneficiario irrelevante2',
              descripcion: 'Descripcion irrelevante2',
              esPyme: true,
            }),
          ],
        }),
      });
      const { getByText, getAllByText } = renderWithTheme(<Tarjeta contrato={contrato} />);

      expect(getAllByText(/beneficiario irrelevante1/i)).toHaveLength(2);
      expect(getByText(/descripcion irrelevante1/i)).toBeInTheDocument();
      expect(getByText('❌')).toBeInTheDocument();

      expect(getAllByText(/beneficiario irrelevante2/i)).toHaveLength(2);
      expect(getByText(/descripcion irrelevante2/i)).toBeInTheDocument();
      expect(getByText('✅')).toBeInTheDocument();
    });
  });
});
