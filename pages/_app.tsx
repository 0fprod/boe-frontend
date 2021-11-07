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
        <title>Contratos públicos</title>
      </Head>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
