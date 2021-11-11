import type { NextPage } from 'next';
import React, { useState } from 'react';
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

  const handleContrato = async (fechaInicio: string, fechaFin?: string) => {
    try {
      const contratos: Contrato[] = await ContratoService.getContratos(fechaInicio, fechaFin);
      setListaContratos(contratos);
    } catch (error) {
      setListaContratos([]);
    }
  };

  return (
    <Layout>
      <ListadoContratos contratos={listaContratos} obtenerContratosPorFecha={handleContrato} />
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
