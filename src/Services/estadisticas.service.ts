import { EstadisticasApiModel } from '../Models/api.model';
import { DatosGrafico } from '../Models/datos.model';
import { mapEstadisticasApiDatosGrafico, mapEstadisticasApiDatosGraficoBarras } from './estadistica.mapper';

const estadisticasPymes = (fechaInicio: string, fechaFin: string = ''): Promise<DatosGrafico> => {
  const fechaFinal = fechaFin ? `&fechaFin=${fechaFin}` : '';
  const query = `?fechaInicio=${fechaInicio}${fechaFinal}`;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/estadisticas/pyme${query}`;

  return fetch(url, { method: 'get' }).then(async (response) => {
    const r: EstadisticasApiModel[] = await response.json();
    return mapEstadisticasApiDatosGrafico(r);
  });
};

const estadisticasActividad = (fechaInicio: string, fechaFin: string = ''): Promise<DatosGrafico> => {
  const fechaFinal = fechaFin ? `&fechaFin=${fechaFin}` : '';
  const query = `?fechaInicio=${fechaInicio}${fechaFinal}`;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/estadisticas/actividad${query}`;

  return fetch(url, { method: 'get' }).then(async (response) => {
    const r: EstadisticasApiModel[] = await response.json();
    return mapEstadisticasApiDatosGrafico(r);
  });
};

const estadisticasTop10Beneficiarios = (fechaInicio: string, fechaFin: string = ''): Promise<DatosGrafico> => {
  const fechaFinal = fechaFin ? `&fechaFin=${fechaFin}` : '';
  const query = `?fechaInicio=${fechaInicio}${fechaFinal}`;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/estadisticas/beneficiarios${query}`;

  return fetch(url, { method: 'get' }).then(async (response) => {
    const r: EstadisticasApiModel[] = await response.json();
    return mapEstadisticasApiDatosGraficoBarras(r, 'Numero de contratos');
  });
};

export const EstadisticasService = {
  estadisticasPymes,
  estadisticasActividad,
  estadisticasTop10Beneficiarios,
};
