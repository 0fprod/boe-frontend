import React, { useEffect, useState } from 'react';
import { Red } from '../Models/redes.model';
import { REDES } from '../utils/redes';
import { getRedPorChainId } from '../utils/utils';

interface Ctx {
  red: Red;
  cambiarRedPorChainId: (chanId?: number) => void;
}

const entornoDeRedPorDefecto = process.env.NEXT_PUBLIC_CHAIN_ENV === 'testnet' ? 'testnet' : 'mainnet';
const redPredeterminada = REDES[entornoDeRedPorDefecto][0]; // Ethereum

export const MetamaskContext = React.createContext<Ctx>({
  red: redPredeterminada,
  cambiarRedPorChainId: (chanId?: number) => {},
});

export const ContextProvider: React.FC<{}> = ({ children }) => {
  const [red, setRed] = useState<Red>(redPredeterminada);

  const actualizarRed = (chainId?: number) => {
    if (chainId) {
      const red = getRedPorChainId(REDES[entornoDeRedPorDefecto], chainId);
      red && setRed(red);
    }
  };

  return <MetamaskContext.Provider value={{ red, cambiarRedPorChainId: actualizarRed }}>{children}</MetamaskContext.Provider>;
};
