import type { NextPage } from 'next';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ListadoContratos } from '../src/Components/Contratos/Contratos';
import { AppContext } from '../src/Context/contratos.context';
import { Layout } from '../src/Layout/Layout';
import { Contrato } from '../src/Models/contratos.model';
import { ContratoService } from '../src/Services/contrato.service';
import { formatearFecha } from '../src/utils/utils';

interface Props {
  contratos: Contrato[];
}

const Contratos: NextPage<Props> = ({ contratos: contratoSSR }) => {
  const { contratos: contratosState, actualizarContratos, query, actualizarQuery } = useContext(AppContext);
  const [cargando, setCargando] = useState(true);
  const [contratos, setContratos] = useState(contratoSSR);

  const actualizarContratosCb = useCallback(
    (fechaInicio: string, fechaFin?: string) => {
      ContratoService.getContratos(fechaInicio, fechaFin).then(actualizarContratos);
    },
    [actualizarContratos],
  );

  const handleContrato = async (fechaInicio: string, fechaFin?: string) => {
    setCargando(true);
    actualizarQuery({ inicio: fechaInicio, final: fechaFin });
  };

  useEffect(() => {
    actualizarContratosCb(query.inicio, query.final);
  }, [query, actualizarContratosCb]);

  useEffect(() => {
    setContratos(contratosState);
    setCargando(false);
  }, [contratosState]);

  return (
    <Layout>
      <ListadoContratos contratos={contratos} obtenerContratosPorFecha={handleContrato} cargando={cargando} />
    </Layout>
  );
};

export async function getStaticProps() {
  const hoy = formatearFecha(new Date().toISOString());
  const contratos = await ContratoService.getContratos(hoy);

  return {
    props: {
      contratos,
    },
  };
}

export default Contratos;
