import React from 'react';
import { ContribucionWrapper } from './Contribucion.styled';
import { Metamask } from './Metamask/Metamask';
import Logo from '../../../public/metamask.png';
import NextImage from 'next/image';
import { useCheckMetamaskInstalled } from '../../Hooks/useEthereum';

export const Contribucion: React.FC<{}> = () => {
  const isMetamaskInstalled = useCheckMetamaskInstalled();

  return (
    <ContribucionWrapper>
      <p>
        Esto me ha llevado un tiempo desarrollarlo, así que si alguno cree que le es útil puede contribuir con cualquier aporte (☕,🍕) y
        así me motivo para añadirle más funciones.
      </p>
      {isMetamaskInstalled ? (
        <Metamask />
      ) : (
        <p>
          Instala
          <a href="https://metamask.io/" target="_blank" rel="noreferrer">
            <NextImage src={Logo} /> Metamask
          </a>
          para contribuir
        </p>
      )}
      <p>o</p>
      <p>Buy me a coffee!</p>
    </ContribucionWrapper>
  );
};
