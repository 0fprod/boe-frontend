import { Beneficiario } from '../Models/contratos.model';

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

export const COLORES_GRAFICOS: string[] = [
  '#4c78a8',
  '#9ecae9',
  '#f58518',
  '#ffbf79',
  '#54a24b',
  '#88d27a',
  '#b79a20',
  '#f2cf5b',
  '#439894',
  '#83bcb6',
  '#e45756',
  '#ff9d98',
  '#79706e',
  '#bab0ac',
  '#d67195',
  '#fcbfd2',
  '#b279a2',
  '#d6a5c9',
  '#9e765f',
  '#d8b5a5',
];
