import { TooltipItem } from 'chart.js';
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Contrato } from '../../Models/contratos.model';
import { DatosGrafico } from '../../Models/datos.model';
import { formatearCoste } from '../../utils/utils';
import { TarjetaGraficaWrapper, TarjetaHeader } from './TarjetaGrafica.styled';

interface Props {
  contratos: Contrato[];
  titulo: string;
  fnCalculo: (c: Contrato[]) => DatosGrafico;
}

export const TarjetaGrafica: React.FC<Props> = ({ contratos, titulo, fnCalculo }) => {
  const [datos] = useState<DatosGrafico>(fnCalculo(contratos));
  const toolTipLabel = ({ label, raw }: TooltipItem<'pie'>) => {
    return ` ${label} | ${formatearCoste(Number(raw))}`;
  };
  return (
    <TarjetaGraficaWrapper>
      <TarjetaHeader>{titulo}</TarjetaHeader>
      <Pie
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
            tooltip: {
              callbacks: {
                label: toolTipLabel,
              },
            },
          },
        }}
      />
    </TarjetaGraficaWrapper>
  );
};
