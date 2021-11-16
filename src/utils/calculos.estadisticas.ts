import { Beneficiario, Contrato } from '../Models/contratos.model';
import { DatosGrafico } from '../Models/datos.model';
import { COLORES_GRAFICOS } from './utils';

export const costeSegunTipoDeEmpresa = (beneficiario: Beneficiario[], pyme: boolean): number => {
  let costeTotal = 0;
  if (pyme) {
    costeTotal = beneficiario.reduce((costeAcumulado, { esPyme, coste }) => (esPyme ? (costeAcumulado += coste) : costeAcumulado), 0);
  } else {
    costeTotal = beneficiario.reduce((costeAcumulado, { esPyme, coste }) => (esPyme ? costeAcumulado : (costeAcumulado += coste)), 0);
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

  // los colores_graficos es base al numero de categorías
  return {
    labels: ['PYMES', 'Grandes Empresas'],
    datasets: [{ data: [totalCostePymes, totalCosteNoPymes], backgroundColor: COLORES_GRAFICOS.slice(0, 2) }],
  };
};

export const gastoTotal = (contratos: Contrato[]) => {
  return contratos.reduce((costeAcumulado, contrato) => {
    const {
      detalles: { beneficiarios },
    } = contrato;
    const totalEnBeneficiarios = gastoTotalDeBeneficiarios(beneficiarios);

    return (costeAcumulado += totalEnBeneficiarios);
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
      const acumuladoEnLaActiviad = datosPorActividad.get(actividad) ?? 0;
      datosPorActividad.set(actividad, acumuladoEnLaActiviad + total);
    }
  });

  return {
    labels: Array.from(datosPorActividad).map(([key]) => key),
    datasets: [
      {
        backgroundColor: COLORES_GRAFICOS.slice(0, datosPorActividad.size),
        data: Array.from(datosPorActividad).map(([_, value]) => value),
      },
    ],
  };
};
