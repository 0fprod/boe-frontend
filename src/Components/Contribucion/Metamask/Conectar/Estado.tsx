import type { Web3ReactHooks } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { REDES } from '../../../../utils/redes';

interface Props {
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  error: ReturnType<Web3ReactHooks['useError']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
  chainId: ReturnType<Web3ReactHooks['useChainId']>;
}

export const Estado = (props: Props) => {
  const { error, isActivating, isActive, chainId } = props;
  const entornoDeRedPorDefecto = process.env.NEXT_PUBLIC_CHAIN_ENV === 'testnet' ? 'testnet' : 'mainnet';
  const [name, setName] = useState('');

  useEffect(() => {
    const red = REDES[entornoDeRedPorDefecto].find((x) => x.chainId === chainId);
    if (red) setName(`"${red.name}"`);
  }, [chainId, entornoDeRedPorDefecto]);

  if (error) {
    return <>🔴 {error.message}</>;
  }

  if (isActivating) {
    return <>🟡 Conectando...</>;
  }

  if (isActive) {
    return <>🟢 Conectado a {name}</>;
  }

  return <>⚪️ Desconectado</>;
};
