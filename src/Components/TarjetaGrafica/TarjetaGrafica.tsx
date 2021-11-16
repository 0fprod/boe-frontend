import React, { useState } from 'react';
import Chart from 'react-google-charts';
import { Contrato } from '../../Models/contratos.model';
import { DatosGrafico } from '../../Models/datos.model';
import { gastoTotal } from '../../utils/calculos.estadisticas';
import { formatearCoste } from '../../utils/utils';
import { PresupuestoTotal, TarjetaGraficaWrapper, TarjetaHeader } from './TarjetaGrafica.styled';

interface Props {
  contratos: Contrato[];
  titulo: string;
  fnCalculo: (c: Contrato[]) => DatosGrafico;
}

export const TarjetaGrafica: React.FC<Props> = ({ contratos, titulo, fnCalculo }) => {
  const [datos] = useState<DatosGrafico>(fnCalculo(contratos));
  const [costeTotal] = useState<number>(gastoTotal(datos));

  const pieChartOptions = {
    is3D: true,
  };

  return (
    <TarjetaGraficaWrapper>
      <TarjetaHeader>{titulo}</TarjetaHeader>
      <Chart chartType="PieChart" options={pieChartOptions} data={datos} />
      <PresupuestoTotal>Gasto total: {formatearCoste(costeTotal)}</PresupuestoTotal>
    </TarjetaGraficaWrapper>
  );
};
