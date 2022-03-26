import { NextPage } from 'next';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Graficas } from '../src/Components/Graficas/Graficas';
import { AppContext } from '../src/Context/contratos.context';
import { Layout } from '../src/Layout/Layout';
import { DatosGrafico } from '../src/Models/datos.model';
import { EstadisticasService } from '../src/Services/estadisticas.service';
import { formatearFecha } from '../src/utils/utils';

interface Props {
  estadisticasPymes: DatosGrafico;
  estadisticasActividad: DatosGrafico;
  estadisticasBeneficiarios: DatosGrafico;
  obtenerContratosPorFecha: (fechaInicio: string, fechaFin?: string) => void;
}

const Estadisticas: NextPage<Props> = ({ estadisticasBeneficiarios, estadisticasPymes, estadisticasActividad }) => {
  const estadisticasVacias = useMemo(() => ({ datasets: [], labels: [] }), []);
  const { estadisticas, actualizarEstadisticas, query, actualizarQuery } = useContext(AppContext);
  const [cargando, setCargando] = useState(true);
  const [stats, setStats] = useState({
    pymes: estadisticasPymes,
    actividad: estadisticasActividad,
    top10: estadisticasBeneficiarios,
  });

  const actualizarEstado = useCallback(
    async (fechaInicio: string, fechaFin?: string) => {
      const estadisticasPymes: DatosGrafico = await EstadisticasService.estadisticasPymes(fechaInicio, fechaFin);
      const estadisticasActividad: DatosGrafico = await EstadisticasService.estadisticasActividad(fechaInicio, fechaFin);
      const estadisticasBeneficiarios: DatosGrafico = await EstadisticasService.estadisticasTop10Beneficiarios(fechaInicio, fechaFin);
      actualizarEstadisticas({
        actividad: estadisticasActividad,
        pymes: estadisticasPymes,
        top10: estadisticasBeneficiarios,
      });
    },
    [actualizarEstadisticas],
  );

  const handleContrato = async (fechaInicio: string, fechaFin?: string) => {
    setCargando(true);
    actualizarQuery({ inicio: fechaInicio, final: fechaFin });
  };

  useEffect(() => {
    actualizarEstado(query.inicio, query.final);
  }, [query, actualizarEstado]);

  useEffect(() => {
    setStats({
      actividad: estadisticas.actividad ?? estadisticasVacias,
      pymes: estadisticas.pymes ?? estadisticasVacias,
      top10: estadisticas.top10 ?? estadisticasVacias,
    });
    setCargando(false);
  }, [estadisticas, estadisticasVacias]);

  return (
    <Layout>
      <Graficas
        estadisticasPymes={stats.pymes}
        estadisticasActividad={stats.actividad}
        estadisticasBeneficiarios={stats.top10}
        obtenerContratosPorFecha={handleContrato}
        cargando={cargando}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const dHoy = new Date();
  const hoy = formatearFecha(new Date(dHoy.getTime()).toISOString());
  const manana = formatearFecha(new Date(dHoy.getFullYear(), dHoy.getMonth(), dHoy.getDate() + 1).toISOString());
  const estadisticasPymes: DatosGrafico = await EstadisticasService.estadisticasPymes(hoy, manana);
  const estadisticasActividad: DatosGrafico = await EstadisticasService.estadisticasActividad(hoy, manana);
  const estadisticasBeneficiarios: DatosGrafico = await EstadisticasService.estadisticasTop10Beneficiarios(hoy, manana);

  return {
    props: {
      estadisticasPymes,
      estadisticasActividad,
      estadisticasBeneficiarios,
    },
  };
}

export default Estadisticas;
