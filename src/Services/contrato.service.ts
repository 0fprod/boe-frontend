import { Contrato } from '../Models/contratos.model';

const getContratos = (fechaInicio: string, fechaFin: string = ''): Promise<Contrato[]> => {
  const fechaFinal = fechaFin ? `&fechaFin=${fechaFin}` : '';
  const query = `?fechaInicio=${fechaInicio}${fechaFinal}`;
  const url = `https://boe-backend.vercel.app/contratos/rango${query}`;

  return fetch(url, { method: 'get' })
    .then((response) => response.json())
    .catch(({ message, statusCode }) => ({ message, statusCode }));
};

export const ContratoService = {
  getContratos,
};
