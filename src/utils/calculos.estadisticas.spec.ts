import {
  Beneficiario,
  construirBeneficiario,
  construirContrato,
  construirDetallesDeContrato,
  constuirInstitucion,
  Contrato,
} from '../Models/contratos.model';
import { DatosGrafico } from '../Models/datos.model';
import { costeSegunTipoDeEmpresa, gastoTotal, totalContratosPorActividad, totalContratosPorPymes } from './calculos.estadisticas';
import { COLORES_GRAFICOS } from './utils';

describe('Pruebas de calculos ', () => {
  const empresas: Beneficiario[] = [
    construirBeneficiario({
      coste: 100,
      esPyme: true,
    }),
    construirBeneficiario({
      coste: 50,
      esPyme: true,
    }),
    construirBeneficiario({
      coste: 10,
      esPyme: false,
    }),
    construirBeneficiario({
      coste: 5,
      esPyme: false,
    }),
    construirBeneficiario({
      coste: 25,
      esPyme: false,
    }),
  ];
  describe('Costes totales de unos datos graficos', () => {
    it('Retorna el total de todas las categorias de datos de un grafico', () => {
      const contratos = [
        construirContrato({
          detalles: construirDetallesDeContrato({
            beneficiarios: [
              construirBeneficiario({
                coste: 100,
              }),
              construirBeneficiario({
                coste: 100,
              }),
            ],
          }),
        }),
        construirContrato({
          detalles: construirDetallesDeContrato({
            beneficiarios: [
              construirBeneficiario({
                coste: 100,
              }),
              construirBeneficiario({
                coste: 100,
              }),
            ],
          }),
        }),
      ];

      expect(gastoTotal(contratos)).toEqual(400);
    });
  });
  describe('Calculo de empresas pymes', () => {
    it('Retorna el total gastado en empresas que son pymes', () => {
      expect(costeSegunTipoDeEmpresa(empresas, true)).toEqual(150);
    });
    it('Retorna el total gastado en empresas que no son pymes', () => {
      expect(costeSegunTipoDeEmpresa(empresas, false)).toEqual(40);
    });

    it('Retorna los datos de las empresas con sus costes totales asociados por PYME/NoPyme', () => {
      const contratos: Contrato[] = [
        construirContrato({
          contratoId: 'id-irrelevante1',
          detalles: construirDetallesDeContrato({
            beneficiarios: [...empresas],
          }),
        }),
        construirContrato({
          contratoId: 'id-irrelevante2',
          detalles: construirDetallesDeContrato({
            beneficiarios: [...empresas],
          }),
        }),
      ];

      const resultado: DatosGrafico = {
        datasets: [
          {
            data: [300, 80],
            backgroundColor: COLORES_GRAFICOS.slice(0, 2),
          },
        ],
        labels: ['PYMES', 'Grandes Empresas'],
      };

      expect(totalContratosPorPymes(contratos)).toStrictEqual(resultado);
    });
  });

  describe('Calculo de empresas por actividad', () => {
    it('Devuelve el total de costes por actividad de la institucion emisora', () => {
      const contratos: Contrato[] = [
        construirContrato({
          contratoId: 'id-irrelevante1',
          detalles: construirDetallesDeContrato({
            beneficiarios: [...empresas],
            institucion: constuirInstitucion({
              actividad: 'actividad-irrelevante1',
            }),
          }),
        }),
        construirContrato({
          contratoId: 'id-irrelevante2',
          detalles: construirDetallesDeContrato({
            beneficiarios: [...empresas],
            institucion: constuirInstitucion({
              actividad: 'actividad-irrelevante2',
            }),
          }),
        }),
        construirContrato({
          contratoId: 'id-irrelevante3',
          detalles: construirDetallesDeContrato({
            beneficiarios: [...empresas],
            institucion: constuirInstitucion({
              actividad: 'actividad-irrelevante3',
            }),
          }),
        }),
      ];
      const resultado: DatosGrafico = {
        datasets: [{ data: [190, 190, 190], backgroundColor: COLORES_GRAFICOS.slice(0, 3) }],
        labels: ['actividad-irrelevante1', 'actividad-irrelevante2', 'actividad-irrelevante3'],
      };

      expect(totalContratosPorActividad(contratos)).toStrictEqual(resultado);
    });

    it('Devuelve el total de costes por actividad de la institucion emisora y agrupa en una categoría las que no tengan actividad asignada', () => {
      const contratos: Contrato[] = [
        construirContrato({
          contratoId: 'id-irrelevante1',
          detalles: construirDetallesDeContrato({
            beneficiarios: [...empresas],
            institucion: constuirInstitucion({
              actividad: 'actividad-irrelevante1',
            }),
          }),
        }),
        construirContrato({
          contratoId: 'id-irrelevante4',
          detalles: construirDetallesDeContrato({
            beneficiarios: [...empresas],
            institucion: constuirInstitucion({
              actividad: 'actividad-irrelevante1',
            }),
          }),
        }),
        construirContrato({
          contratoId: 'id-irrelevante2',
          detalles: construirDetallesDeContrato({
            beneficiarios: [...empresas],
            institucion: constuirInstitucion({}),
          }),
        }),
        construirContrato({
          contratoId: 'id-irrelevante3',
          detalles: construirDetallesDeContrato({
            beneficiarios: [...empresas],
            institucion: constuirInstitucion({}),
          }),
        }),
      ];

      const resultado: DatosGrafico = {
        datasets: [{ data: [380, 380], backgroundColor: COLORES_GRAFICOS.slice(0, 2) }],
        labels: ['actividad-irrelevante1', 'Sin actividad definida'],
      };

      expect(totalContratosPorActividad(contratos)).toStrictEqual(resultado);
    });
  });
});
