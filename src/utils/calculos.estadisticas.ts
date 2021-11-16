import { Beneficiario, Contrato } from '../Models/contratos.model';
import { DatosGrafico } from '../Models/datos.model';

export const costeSegunTipoDeEmpresa = (beneficiario: Beneficiario[], pyme: boolean): number => {
  let costeTotal = 0;
  if (pyme) {
    costeTotal = beneficiario.reduce((costeAcumulado, { esPyme, coste }) => (esPyme ? (costeAcumulado += coste) : costeAcumulado), 0);
  } else {
    costeTotal = beneficiario.reduce((costeAcumulado, { esPyme, coste }) => (esPyme ? (costeAcumulado += coste) : coste), 0);
  }
  return costeTotal;
};

export const totalContratosPorPymes = (contratos: Contrato[]): DatosGrafico => {
  const totalCostePymes = contratos.reduce((costeAcumulado, { detalles: { beneficiarios } }) => {
    costeAcumulado += costeSegunTipoDeEmpresa(beneficiarios, true);
    return costeAcumulado;
  }, 0);
  const totalCosteNoPymes = contratos.reduce((costeAcumulado, { detalles: { beneficiarios } }) => {
    costeAcumulado += costeSegunTipoDeEmpresa(beneficiarios, false);
    return costeAcumulado;
  }, 0);
  return [
    ['PYMES/Grandes Empresas', 'Ingresos totales'],
    ['PYMES', totalCostePymes],
    ['Grandes Empresas', totalCosteNoPymes],
  ];
};

export const gastoTotal = (datos: DatosGrafico) => {
  const [titulo, ...resto] = datos;

  return resto.reduce((costeAcumulado, [_titulo, coste]) => {
    if (!Number.isNaN(coste) && coste >= 0) return (costeAcumulado += coste);
    return costeAcumulado;
  }, 0);
};

const gastoTotalDeBeneficiarios = (beneficiarios: Beneficiario[]): number =>
  beneficiarios.reduce((costeAcumulado, { coste }) => (costeAcumulado += coste), 0);

export const totalContratosPorActividad = (contratos: Contrato[]): DatosGrafico => {
  const datosPorActividad = new Map<string, number>();

  contratos.forEach(({ detalles: { institucion, beneficiarios } }) => {
    const actividad = institucion.actividad;
    const total = gastoTotalDeBeneficiarios(beneficiarios);
    if (!actividad) {
      const acumuladoSinActividad = datosPorActividad.get('Sin actividad definida') ?? 0;
      datosPorActividad.set('Sin actividad definida', acumuladoSinActividad + total);
    } else {
      datosPorActividad.set(actividad, total);
    }
  });

  return [['Actividad', 'Coste por actividad'], ...Array.from(datosPorActividad)];
};
