import React from 'react';
import { Contrato } from '../../Models/contratos.model';
import { Calendario } from '../Compartido/Calendario/Calendario';
import { Cargando } from '../Compartido/Cargando/Cargando';
import { Mensaje } from './Contratos.styled';
import { Tarjeta } from './Tarjeta/Tarjeta';

interface Props {
  contratos: Contrato[];
  obtenerContratosPorFecha: (fechaInicio: string, fechaFin?: string) => void;
  cargando: boolean;
}

export const ListadoContratos: React.FC<Props> = ({ contratos, obtenerContratosPorFecha, cargando }) => {
  const totalContratos = contratos && contratos.length;
  return (
    <React.Fragment>
      <Calendario obtenerContratosPorFecha={obtenerContratosPorFecha} />
      {cargando && <Cargando />}
      {!cargando && totalContratos ? (
        contratos.map((c, index) => <Tarjeta key={index} contrato={c} />)
      ) : (
        <Mensaje>🚧 No hay contratos para las fechas seleccionadas 🚧</Mensaje>
      )}
    </React.Fragment>
  );
};
