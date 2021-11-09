import React from 'react';
import { Contrato } from '../../Models/contratos.model';
import { Calendario } from '../Calendario/Calendario';
import { Tarjeta } from '../Tarjeta/Tarjeta';

interface Props {
  contratos: Contrato[];
}

export const ListadoContratos: React.FC<Props> = ({ contratos }) => {
  return (
    <React.Fragment>
      <Calendario
        obtenerContratosPorFecha={(fechaInicio: string, fechaFin?: string) => {
          return {};
        }}
      />
      {contratos &&
        contratos.length &&
        contratos.map((c, index) => {
          return <Tarjeta key={index} contrato={c} />;
        })}
    </React.Fragment>
  );
};
