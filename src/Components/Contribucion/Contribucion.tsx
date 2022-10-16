import React, { useRef, useState } from 'react';
import { ContribucionWrapper, DestinoWrapper, DireccionDestino, InputWrapper, Tooltip } from './Contribucion.styled';
import { Metamask } from './Metamask/Metamask';
import Logo from '../../../public/metamask.png';
import NextImage from 'next/image';
import { useCheckMetamaskInstalled } from '../../Hooks/useEthereum';
import CopyIcon from '/public/copy.png';
import { ContextProvider } from '../../Context/metamask.context';

export const Contribucion: React.FC<{}> = () => {
  const isMetamaskInstalled = useCheckMetamaskInstalled();
  const destinationRef = useRef<HTMLInputElement>(null);
  const [mostrarTooltip, setMostrarTooltip] = useState(false);

  const copiar = () => {
    navigator.clipboard.writeText(destinationRef.current?.value ?? '');
    setMostrarTooltip(true);

    setTimeout(() => {
      setMostrarTooltip(false);
    }, 1500);
  };

  return (
    <ContribucionWrapper>
      <p>
        Esto me ha llevado un tiempo desarrollarlo, así que si alguno cree que le es útil puede contribuir con cualquier aporte (☕,🍕) y
        así me animo para añadirle más funciones.
      </p>
      {isMetamaskInstalled ? (
        <ContextProvider>
          <Metamask destinoRef={destinationRef} />
        </ContextProvider>
      ) : (
        <p>
          Instala{' '}
          <a href="https://metamask.io/" target="_blank" rel="noreferrer">
            <NextImage src={Logo} /> Metamask
          </a>{' '}
          para contribuir
        </p>
      )}
      <br />
      <DestinoWrapper>
        <p>O envía cualquier token a esta dirección</p>
        <InputWrapper>
          <DireccionDestino type="text" value="0x14A075Fff3BD211ce8715ed641dB23C2bD140859" disabled ref={destinationRef} />
          <NextImage src={CopyIcon} width={24} height={28} alt="copiar" onClick={copiar} title="Copiar" />
          {mostrarTooltip && <Tooltip>Copiado al portapapeles!</Tooltip>}
        </InputWrapper>
      </DestinoWrapper>
    </ContribucionWrapper>
  );
};
