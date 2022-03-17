import type { Web3ReactHooks } from '@web3-react/core';
import { useContext, useEffect, useState } from 'react';
import { MetamaskContext } from '../../../../Context/metamask.context';
import { EstadoWrapper } from './Estado.styled';

interface Props {
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  error: ReturnType<Web3ReactHooks['useError']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
}

export const Estado = (props: Props) => {
  const { error, isActivating, isActive } = props;
  const { red } = useContext(MetamaskContext);
  const [name, setName] = useState('');

  useEffect(() => {
    if (red) setName(`"${red.name}"`);
  }, [red]);

  if (error) {
    return <EstadoWrapper>🔴 {error.message}</EstadoWrapper>;
  }

  if (isActivating) {
    return <EstadoWrapper>🟡 Conectando...</EstadoWrapper>;
  }

  if (isActive) {
    return <EstadoWrapper>🟢 Conectado a {name}</EstadoWrapper>;
  }

  return <EstadoWrapper>⚪️ Desconectado</EstadoWrapper>;
};
