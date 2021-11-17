import type { NextPage } from 'next';
import React from 'react';
import { Informacion } from '../src/Components/Info/Informacion';
import { Layout } from '../src/Layout/Layout';

const Info: NextPage = () => {
  return (
    <Layout>
      <Informacion />
    </Layout>
  );
};

export default Info;
