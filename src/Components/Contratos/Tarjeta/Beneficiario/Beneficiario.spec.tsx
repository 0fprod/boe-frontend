import { renderWithTheme } from '../../../../../styles/theme.test.utils';
import { construirBeneficiario } from '../../../../Models/contratos.model';
import { Beneficiario } from './Beneficiario';

const getBeneficiario = () => {
  return construirBeneficiario({
    nif: 'A28599033.',
    nombre: 'INDRA SISTEMAS SA.',
    coste: 5500000,
    esPyme: false,
    lote: '',
    descripcion:
      'acuerdo marco para el desarrollo de actividades de sostenimiento y apoyo al ciclo de vida de los sistemas, equipos y componentes del sistema de combate de las fragatas de la clase f100 de la armada española.',
  });
};

describe('Specs del componente Beneficiario', () => {
  it('Debe no mostrar la informacion por defecto', () => {
    const beneficiario = getBeneficiario();
    const { queryByLabelText } = renderWithTheme(<Beneficiario beneficiario={beneficiario} />);

    expect(queryByLabelText(/A28599033/i)).not.toBeInTheDocument();
  });

  it('Muestra la información del beneficiario cuando se presiona el button', () => {
    const beneficiario = getBeneficiario();
    const { getByText, getByLabelText } = renderWithTheme(<Beneficiario beneficiario={beneficiario} />);
    const button = getByLabelText('Expandir informacion');

    button.click();

    expect(getByText(/A28599033/i)).toBeInTheDocument();
  });

  it('Oculta la información del beneficiario cuando se presiona el button', () => {
    const beneficiario = getBeneficiario();
    const { getByLabelText, queryByLabelText } = renderWithTheme(<Beneficiario beneficiario={beneficiario} />);

    let button = getByLabelText('Expandir informacion');
    button.click();

    button = getByLabelText('Contraer informacion');
    button.click();

    expect(queryByLabelText(/A28599033/i)).not.toBeInTheDocument();
  });
});
