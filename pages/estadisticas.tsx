import { NextPage } from 'next';
import React from 'react';
import { Graficas } from '../src/Components/Graficas/Graficas';
import { Layout } from '../src/Layout/Layout';
import { Contrato } from '../src/Models/contratos.model';
import { ContratoService } from '../src/Services/contrato.service';
import { formatearFecha } from '../src/utils/utils';

interface Props {
  contratos: Contrato[];
}

const Estadisticas: NextPage<Props> = ({ contratos }) => {
  return (
    <Layout>
      <Graficas contratos={contratos}></Graficas>
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

export default Estadisticas;
