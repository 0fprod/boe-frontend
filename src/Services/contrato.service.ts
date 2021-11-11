import { Contrato } from '../Models/contratos.model';

const getContratos = (fechaInicio: string, fechaFin: string = ''): Promise<Contrato[]> => {
  const fechaFinal = fechaFin ? `&fechaFin=${fechaFin}` : '';
  const query = `?fechaInicio=${fechaInicio}${fechaFinal}`;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/contratos/rango${query}`;

  return fetch(url, { method: 'get' })
    .then((response) => response.json())
    .catch(({ message, statusCode }) => ({ message: message ?? null, statusCode: statusCode ?? null }));
};

export const ContratoService = {
  getContratos,
};
