import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { ListadoContratos } from '../src/Components/Contratos/Contratos';
import { Layout } from '../src/Layout/Layout';
import { Contrato } from '../src/Models/contratos.model';
import { ContratoService } from '../src/Services/contrato.service';
import { formatearFecha } from '../src/utils/utils';

interface Props {
  contratos: Contrato[];
}

const Contratos: NextPage<Props> = ({ contratos }) => {
  const [listaContratos, setListaContratos] = useState(contratos);
  const [cargando, setCargando] = useState(true);

  const handleContrato = async (fechaInicio: string, fechaFin?: string) => {
    try {
      setCargando(true);
      const contratos: Contrato[] = await ContratoService.getContratos(fechaInicio, fechaFin);
      setListaContratos(contratos);
    } catch (error) {
      setListaContratos([]);
    }
  };

  useEffect(() => {
    setCargando(false);
  }, [listaContratos]);

  return (
    <Layout>
      <ListadoContratos contratos={listaContratos} obtenerContratosPorFecha={handleContrato} cargando={cargando} />
    </Layout>
  );
};

export async function getStaticProps() {
  let contratos;
  const hoy = formatearFecha(new Date().toISOString());
  try {
    contratos = await ContratoService.getContratos(hoy);
  } catch (err) {
    console.error('Err --> ', err);
  }

  return {
    props: {
      contratos,
    },
  };
}

export default Contratos;
