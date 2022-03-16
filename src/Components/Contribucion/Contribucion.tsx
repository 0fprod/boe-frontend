import React, { useRef } from 'react';
import { ContribucionWrapper, DestinoWrapper, DireccionDestino } from './Contribucion.styled';
import { Metamask } from './Metamask/Metamask';
import Logo from '../../../public/metamask.png';
import NextImage from 'next/image';
import { useCheckMetamaskInstalled } from '../../Hooks/useEthereum';

export const Contribucion: React.FC<{}> = () => {
  const isMetamaskInstalled = useCheckMetamaskInstalled();
  const destinationRef = useRef<HTMLInputElement>(null);

  return (
    <ContribucionWrapper>
      <p>
        Esto me ha llevado un tiempo desarrollarlo, así que si alguno cree que le es útil puede contribuir con cualquier aporte (☕,🍕) y
        así me motivo para añadirle más funciones.
      </p>
      {isMetamaskInstalled ? (
        <Metamask destinoRef={destinationRef}/>
      ) : (
        <p>
          Instala
          <a href="https://metamask.io/" target="_blank" rel="noreferrer">
            <NextImage src={Logo} /> Metamask
          </a>
          para contribuir
        </p>
      )}
      <br />
      <DestinoWrapper>
        <p>O envía cualquier token a esta dirección </p>
        <DireccionDestino type="text" value="0x57d3564Fe77ae5f4787f5AdF70Df081c836f210C" disabled ref={destinationRef} />
      </DestinoWrapper>
    </ContribucionWrapper>
  );
};
