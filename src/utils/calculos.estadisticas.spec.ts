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
      const total: DatosGrafico = [
        ['Categorías', 'Total por categoría'],
        ['Categoria 1', 10],
        ['Categoria 2', 10],
        ['Categoria 3', 500],
        ['Categoria 4', 50],
      ];

      expect(gastoTotal(total)).toEqual(570);
    });

    it('Retorna el total de todas las categorias de datos de un grafico ignorando los costes que no son digitos o menores a 0', () => {
      const total: any = [
        ['Categorías', 'Total por categoría'],
        ['Categoria 1', '10'],
        ['Categoria 2', -1],
        ['Categoria 3', 'aa'],
        ['Categoria 4', 5],
        ['Categoria 5', 10],
      ];

      expect(gastoTotal(total)).toEqual(15);
    });
  });
  describe('Calculo de empresas pymes', () => {
    it('Retorna el total gastado en empresas que son pymes', () => {
      expect(costeSegunTipoDeEmpresa(empresas, true)).toEqual(150);
    });
    it('Retorna el total gastado en empresas que no son pymes', () => {
      expect(costeSegunTipoDeEmpresa(empresas, false)).toEqual(25);
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

      const resultado: DatosGrafico = [
        ['PYMES/NO PYMES', 'Ingresos totales'],
        ['PYMES', 300],
        ['NO PYMES', 50],
      ];

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
      const resultado: DatosGrafico = [
        ['Actividad', 'Coste por actividad'],
        ['actividad-irrelevante1', 190],
        ['actividad-irrelevante2', 190],
        ['actividad-irrelevante3', 190],
      ];

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
      const resultado: DatosGrafico = [
        ['Actividad', 'Coste por actividad'],
        ['actividad-irrelevante1', 190],
        ['Sin actividad definida', 380],
      ];

      expect(totalContratosPorActividad(contratos)).toStrictEqual(resultado);
    });
  });
});
