import { EstadisticasApiModel } from '../Models/api.model';
import { DatosGrafico } from '../Models/datos.model';
import { COLORES_GRAFICOS } from '../utils/utils';

export const mapEstadisticasApiDatosGrafico = (estadisticas: EstadisticasApiModel[]): DatosGrafico => {
  if (!estadisticas || !Array.isArray(estadisticas)) {
    return {
      labels: [],
      datasets: [],
    };
  }
  return {
    labels: estadisticas.map(({ etiqueta }) => etiqueta),
    datasets: [
      {
        data: estadisticas.map(({ valor }) => valor),
        backgroundColor: COLORES_GRAFICOS.slice(0, estadisticas.length),
      },
    ],
  };
};

export const mapEstadisticasApiDatosGraficoBarras = (estadisticas: EstadisticasApiModel[], label: string): DatosGrafico => {
  if (!estadisticas || !Array.isArray(estadisticas)) {
    return {
      labels: [],
      datasets: [],
    };
  }

  return {
    labels: estadisticas.map(({ etiqueta }) => etiqueta),
    datasets: [
      {
        label,
        data: estadisticas.map(({ valor }) => valor),
        backgroundColor: COLORES_GRAFICOS.slice(0, estadisticas.length),
      },
    ],
  };
};
