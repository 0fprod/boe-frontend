import { Contrato } from '../Models/contratos.model';
import { DatosGrafico } from '../Models/datos.model';

export const totalContratosPorPymes = (contratos: Contrato[]): DatosGrafico => {
  return [
    ['Pymes/NoPymes', 'Ingresos totales'],
    ['pymes', 30],
    ['nopymes', 31],
  ];
};
