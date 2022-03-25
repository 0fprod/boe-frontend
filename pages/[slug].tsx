import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Cargando } from '../src/Components/Compartido/Cargando/Cargando';
import { Tarjeta } from '../src/Components/Contratos/Tarjeta/Tarjeta';
import { Layout } from '../src/Layout/Layout';
import { Contrato } from '../src/Models/contratos.model';
import { ContratoService } from '../src/Services/contrato.service';

interface Props {
  contrato: Contrato;
}

const Contratos: NextPage<Props> = ({ contrato }) => {
  const { isFallback } = useRouter();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
  }, []);

  if (isFallback) {
    return (
      <Layout>
        <Cargando />
      </Layout>
    );
  }

  return (
    <Layout>
      <Tarjeta contrato={contrato} />
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

//@ts-ignore
export async function getStaticProps({ params }) {
  let { slug } = params;
  try {
    const contrato = await ContratoService.getContratoPorBoeId(slug);
    return {
      props: {
        contrato,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default Contratos;
