import { TooltipItem } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { DatosGrafico } from '../../../Models/datos.model';
import { formatearCoste } from '../../../utils/utils';
import { TarjetaGraficaWrapper, TarjetaHeader } from './TarjetaGrafica.styled';

interface Props {
  titulo: string;
  tipoGrafico: 'pie' | 'bar';
  formatoCoste: 'moneda' | 'digito';
  datos: DatosGrafico;
}

export const TarjetaGrafica: React.FC<Props> = ({ titulo, tipoGrafico, formatoCoste, datos }) => {
  const [data, setData] = useState(datos);
  const toolTipLabel = ({ label, raw }: TooltipItem<'pie'>) => {
    return ` ${label} | ${formatearCoste(Number(raw))}`;
  };

  const chart = () => {
    setData(datos);
  };

  useEffect(() => {
    chart();
  });

  return (
    <TarjetaGraficaWrapper>
      <TarjetaHeader>{titulo}</TarjetaHeader>
      {tipoGrafico == 'pie' && (
        <Pie
          data={{ ...data }}
          options={{
            responsive: true,
            layout: {
              padding: 10,
            },
            plugins: {
              legend: {
                position: 'top',
                maxWidth: 500,
              },
              tooltip: {
                callbacks: {
                  label: toolTipLabel,
                },
              },
            },
          }}
        />
      )}
      {tipoGrafico === 'bar' && (
        <Bar
          data={{ ...datos }}
          options={{
            responsive: true,
            layout: {
              padding: 10,
            },
            plugins: {
              legend: {
                position: 'top',
                maxWidth: 500,
              },
            },
          }}
        />
      )}
    </TarjetaGraficaWrapper>
  );
};
