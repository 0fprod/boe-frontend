import { TooltipItem } from 'chart.js';
import React, { useCallback } from 'react';
import { Pie } from 'react-chartjs-2';
import { isMobile } from 'react-device-detect';
import { DatosGrafico } from '../../../Models/datos.model';
import { formatearCoste } from '../../../utils/utils';
import { TarjetaGraficaWrapper, TarjetaHeader } from './TarjetaGrafica.styled';

interface Props {
  titulo: string;
  formatoCoste: 'moneda' | 'digito';
  datos: DatosGrafico;
}

export const TarjetaGrafica: React.FC<Props> = ({ titulo, formatoCoste, datos }) => {
  const formatTooltip = useCallback(
    (input: string) => {
      switch (formatoCoste) {
        case 'moneda':
          return formatearCoste(Number(input));
        case 'digito':
        default:
          return input;
      }
    },
    [formatoCoste],
  );

  const toolTipLabel = useCallback(
    ({ label, raw }: TooltipItem<'pie'>) => {
      return ` ${label} | ${formatTooltip(raw + '')}`;
    },
    [formatTooltip],
  );

  // En build time any no da errores y el tipo real sí -> ChartOptions<keyof ChartTypeRegistry>
  const defaultConfig: any = {
    responsive: true,
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        position: 'top',
        maxWidth: 500,
        align: 'start',
      },
      tooltip: {
        callbacks: {
          label: toolTipLabel,
        },
      },
    },
  };
  // En build time any no da errores y el tipo real sí -> ChartOptions<keyof ChartTypeRegistry>
  const mobileConfig: any = {
    ...defaultConfig,
    plugins: {
      legend: {
        ...defaultConfig.plugins?.legend,
        maxHeight: 700,
        labels: {
          boxWidth: 20,
          font: {
            size: 10,
          },
        },
      },
      ...defaultConfig.plugins?.tooltip,
    },
  };

  return (
    <TarjetaGraficaWrapper>
      <TarjetaHeader>{titulo}</TarjetaHeader>
      <Pie data={{ ...datos }} options={isMobile ? mobileConfig : defaultConfig} />
    </TarjetaGraficaWrapper>
  );
};
