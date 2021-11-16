import React, { useState } from 'react';
import { Contrato } from '../../Models/contratos.model';
import { gastoTotal, totalContratosPorActividad, totalContratosPorPymes } from '../../utils/calculos.estadisticas';
import { formatearCoste } from '../../utils/utils';
import { Calendario } from '../Compartido/Calendario/Calendario';
import { Cargando } from '../Compartido/Cargando/Cargando';
import { TarjetaGrafica } from '../TarjetaGrafica/TarjetaGrafica';
import { PresupuestoTotal } from './Graficas.styled';

interface Props {
  contratos: Contrato[];
  cargando: boolean;
  obtenerContratosPorFecha: (fechaInicio: string, fechaFin?: string) => void;
}

export const Graficas: React.FC<Props> = ({ contratos, cargando, obtenerContratosPorFecha }) => {
  const [costeTotal] = useState<number>(gastoTotal(contratos));

  return (
    <React.Fragment>
      <Calendario obtenerContratosPorFecha={obtenerContratosPorFecha} />
      {cargando && <Cargando />}
      <PresupuestoTotal>
        Gasto total en la fecha: &nbsp; <span>{formatearCoste(costeTotal)}</span>
      </PresupuestoTotal>
      <TarjetaGrafica
        titulo="Presupuesto distribuido en PYMES y grandes empresas"
        fnCalculo={totalContratosPorPymes}
        contratos={contratos}
      />
      <TarjetaGrafica titulo="Presupuesto distribuido por actividad" fnCalculo={totalContratosPorActividad} contratos={contratos} />
    </React.Fragment>
  );
};
