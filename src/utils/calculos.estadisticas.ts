import { Beneficiario, Contrato } from '../Models/contratos.model';
import { DatosGrafico } from '../Models/datos.model';

export const costeSegunTipoDeEmpresa = (beneficiario: Beneficiario[], pyme: boolean): number => {
  let costeTotal = 0;
  if (pyme) {
    costeTotal = beneficiario.reduce((costeAcumulado, { esPyme, coste }) => (esPyme ? (costeAcumulado += coste) : costeAcumulado), 0);
  } else {
    costeTotal = beneficiario.reduce((costeAcumulado, { esPyme, coste }) => (esPyme ? (costeAcumulado += costeAcumulado) : coste), 0);
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
    ['PYMES/NO PYMES', 'Ingresos totales'],
    ['PYMES', totalCostePymes],
    ['NO PYMES', totalCosteNoPymes],
  ];
};

export const gastoTotal = (datos: DatosGrafico) => {
  const [titulo, ...resto] = datos;

  return resto.reduce((costeAcumulado, [_titulo, coste]) => {
    if (Number.isInteger(coste) && coste >= 0) return (costeAcumulado += coste);
    return costeAcumulado;
  }, 0);
};
