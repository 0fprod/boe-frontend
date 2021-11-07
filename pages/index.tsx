import type { NextPage } from 'next';
import React from 'react';
import { ListadoContratos } from '../src/Components/Contratos/Contratos';
import { Layout } from '../src/Layout/Layout';
import { Contrato } from '../src/Models/contratos.model';
import { ContratoService } from '../src/Services/contrato.service';

interface Props {
  contratos: Contrato[];
}

const Contratos: NextPage<Props> = ({ contratos }) => (
  <Layout>
    <ListadoContratos contratos={contratos} />
  </Layout>
);

export async function getStaticProps() {
  let contratos;
  try {
    contratos = await ContratoService.getContratos('');
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
