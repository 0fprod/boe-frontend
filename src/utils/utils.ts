import { Beneficiario } from '../Models/contratos.model';

export const calcularTotal = (coleccion: Beneficiario[]): number => {
  if (Array.isArray(coleccion) && coleccion.length) {
    return coleccion.reduce((acc, { coste }) => (coste ? (acc += coste) : acc), 0);
  }
  return 0;
};

export const formatearCoste = (price: number): string => {
  const formatter = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
  return formatter.format(Number(Number(price).toFixed(2))).replace(/\xa0/g, ' ');
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
