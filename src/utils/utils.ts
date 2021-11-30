import { Beneficiario } from '../Models/contratos.model';
import { DatosGrafico } from '../Models/datos.model';

export const gastoTotal = (datos: DatosGrafico) => {
  if (datos && datos.datasets && datos.datasets[0] && datos.datasets[0].data) {
    return datos.datasets[0].data.reduce((costeAcumulado, coste) => (costeAcumulado += coste), 0);
  }
  return 0;
};

export const calcularTotal = (coleccion: Beneficiario[]): number => {
  if (Array.isArray(coleccion) && coleccion.length) {
    return coleccion.reduce((acc, { coste }) => (coste ? (acc += coste) : acc), 0);
  }
  return 0;
};

export const formatearCoste = (price: number): string => {
  const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
  return formatter.format(Number(Number(price).toFixed(2)));
};

export const formatearFecha = (fechaEnIso: string): string => {
  try {
    const fecha = new Date(fechaEnIso);
    const aaaa = fecha.getFullYear();
    const mm = fecha.getMonth() + 1;
    const dd = fecha.getDate();

    if (Number.isNaN(aaaa) || Number.isNaN(mm) || Number.isNaN(dd)) {
      return '-';
    }

    return `${aaaa}-${mm < 10 ? '0' + mm : mm}-${dd < 10 ? '0' + dd : dd}`;
  } catch (err) {
    return '-';
  }
};

export const COLORES_GRAFICOS = [
  '#007EA7',
  '#DB222A',
  '#ED760E',
  '#0b5d1e',
  '#EA899A',
  '#1F7A8C',
  '#FAD201',
  '#41ead4',
  '#4D685A',
  '#4FB286',
  '#50FFB1',
  '#755B69',
  '#772D8B',
  '#8FAD88',
  '#96C5B0',
  '#9D9171',
  '#A31621',
  '#ADF1D2',
  '#B58DB6',
  '#BFDBF7',
  '#CBDF90',
  '#D782BA',
  '#E365C1',
  '#E8D6CB',
  '#FFA62B',
  '#ff0022',
  '#b91372',
];
