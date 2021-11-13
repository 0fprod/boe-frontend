import React from 'react';
import Chart from 'react-google-charts';
import { Contrato } from '../../Models/contratos.model';
import { DatosGrafico } from '../../Models/datos.model';
import { TarjetaGraficaWrapper, TarjetaHeader } from './TarjetaGrafica.styled';

interface Props {
  contratos: Contrato[];
  titulo: string;
  fnCalculo: (c: Contrato[]) => DatosGrafico;
}

export const TarjetaGrafica: React.FC<Props> = ({ contratos, titulo, fnCalculo }) => {
  const pieChartOptions = {
    pieHole: 0.2,
  };

  const datos: DatosGrafico = fnCalculo(contratos);
  return (
    <TarjetaGraficaWrapper>
      <TarjetaHeader>{titulo}</TarjetaHeader>
      <Chart chartType="PieChart" options={pieChartOptions} data={datos} />
    </TarjetaGraficaWrapper>
  );
};
