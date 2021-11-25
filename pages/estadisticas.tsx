import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Graficas } from '../src/Components/Graficas/Graficas';
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
  const [pymesStats, setPymesStats] = useState(estadisticasPymes);
  const [activityStats, setActivityStats] = useState(estadisticasActividad);
  const [beneficiarioStats, setBeneficiarioStats] = useState(estadisticasBeneficiarios);
  const [cargando, setCargando] = useState(true);

  const handleContrato = async (fechaInicio: string, fechaFin?: string) => {
    try {
      setCargando(true);
      const estadisticasPymes: DatosGrafico = await EstadisticasService.estadisticasPymes(fechaInicio, fechaFin);
      const estadisticasActividad: DatosGrafico = await EstadisticasService.estadisticasActividad(fechaInicio, fechaFin);
      const estadisticasBeneficiarios: DatosGrafico = await EstadisticasService.estadisticasTop10Beneficiarios(fechaInicio, fechaFin);
      setPymesStats(estadisticasPymes);
      setActivityStats(estadisticasActividad);
      setBeneficiarioStats(estadisticasBeneficiarios);
    } catch (error) {
      setPymesStats({ labels: [], datasets: [] });
      setActivityStats({ labels: [], datasets: [] });
    }
  };

  useEffect(() => {
    setCargando(false);
  }, [pymesStats]);

  return (
    <Layout>
      <Graficas
        estadisticasPymes={pymesStats}
        estadisticasActividad={activityStats}
        estadisticasBeneficiarios={beneficiarioStats}
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
