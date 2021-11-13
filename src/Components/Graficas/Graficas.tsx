import React from 'react';
import { Contrato } from '../../Models/contratos.model';
import { totalContratosPorPymes } from '../../utils/calculos.estadisticas';
import { TarjetaGrafica } from '../TarjetaGrafica/TarjetaGrafica';

interface Props {
  contratos: Contrato[];
}

export const Graficas: React.FC<Props> = ({ contratos }) => {
  return (
    <React.Fragment>
      <TarjetaGrafica titulo="Prueba" fnCalculo={totalContratosPorPymes} contratos={contratos} />
    </React.Fragment>
  );
};
