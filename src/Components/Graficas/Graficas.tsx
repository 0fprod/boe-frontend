import React, { useEffect, useState } from 'react';
import { DatosGrafico } from '../../Models/datos.model';
import { formatearCoste, gastoTotal } from '../../utils/utils';
import { Calendario } from '../Compartido/Calendario/Calendario';
import { Cargando } from '../Compartido/Cargando/Cargando';
import { GraficasWrapper, PresupuestoTotal } from './Graficas.styled';
import { TarjetaGrafica } from './TarjetaGrafica/TarjetaGrafica';

interface Props {
  estadisticasPymes: DatosGrafico;
  estadisticasBeneficiarios: DatosGrafico;
  estadisticasActividad: DatosGrafico;
  cargando: boolean;
  obtenerContratosPorFecha: (fechaInicio: string, fechaFin?: string) => void;
}

export const Graficas: React.FC<Props> = ({
  cargando,
  estadisticasPymes,
  estadisticasBeneficiarios,
  estadisticasActividad,
  obtenerContratosPorFecha,
}) => {
  const [costeTotal, setCosteTotal] = useState<number>(0);

  useEffect(() => {
    setCosteTotal(gastoTotal(estadisticasPymes));
  }, [estadisticasPymes]);

  return (
    <React.Fragment>
      <Calendario obtenerContratosPorFecha={obtenerContratosPorFecha} />
      {cargando && <Cargando />}
      <PresupuestoTotal>
        Gasto total en la fecha: &nbsp; <span>{formatearCoste(costeTotal)}</span>
      </PresupuestoTotal>
      <GraficasWrapper>
        <TarjetaGrafica titulo="Top empresas con más contratos" formatoCoste="digito" datos={estadisticasBeneficiarios} />
        <TarjetaGrafica titulo="Presupuesto en PYMES y grandes empresas" formatoCoste="moneda" datos={estadisticasPymes} />
        <TarjetaGrafica titulo="Presupuesto distribuido por actividad" formatoCoste="moneda" datos={estadisticasActividad} />
      </GraficasWrapper>
    </React.Fragment>
  );
};
