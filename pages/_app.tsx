import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { customTheme } from '../styles/theme.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Contrataciones del sector público</title>
        <meta name="description" content="Contrataciones del sector público." />
        <meta name="keywords" content="BOE, contratos públicos, estado, dinero, empresas" />
        <meta property="og:title" content="Contrataciones del sector público" />
        <meta property="og:description" content="Queremos mostrar cuánto dinero público va destinado a qué empresas y para qué." />
        <meta property="og:url" content="https://boe-frontend.vercel.app/" />
        <meta property="og:site_name" content="Contrataciones del sector público" />
        <meta property="og:image" content="https://boe-frontend.vercel.app/cplogo_128.png" />
        <meta property="twitter:image:src" content="https://boe-frontend.vercel.app/cplogo_128.png" />
        <meta property="twitter:card" content="summary" />
      </Head>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
