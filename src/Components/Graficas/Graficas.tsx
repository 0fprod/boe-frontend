import React from 'react';
import { Contrato } from '../../Models/contratos.model';
import { totalContratosPorActividad, totalContratosPorPymes } from '../../utils/calculos.estadisticas';
import { Calendario } from '../Compartido/Calendario/Calendario';
import { Cargando } from '../Compartido/Cargando/Cargando';
import { TarjetaGrafica } from '../TarjetaGrafica/TarjetaGrafica';

interface Props {
  contratos: Contrato[];
  cargando: boolean;
  obtenerContratosPorFecha: (fechaInicio: string, fechaFin?: string) => void;
}

export const Graficas: React.FC<Props> = ({ contratos, cargando, obtenerContratosPorFecha }) => {
  return (
    <React.Fragment>
      <Calendario obtenerContratosPorFecha={obtenerContratosPorFecha} />
      {cargando && <Cargando />}
      <TarjetaGrafica
        titulo="Presupuesto distribuido en PYMES y grandes empresas"
        fnCalculo={totalContratosPorPymes}
        contratos={contratos}
      />
      <TarjetaGrafica titulo="Presupuesto distribuido por actividad" fnCalculo={totalContratosPorActividad} contratos={contratos} />
    </React.Fragment>
  );
};
