import React, { useState } from 'react';
import { Red } from '../Models/redes.model';
import { REDES } from '../utils/redes';

interface Ctx {
  red: Red;
  setRed: (r: Red) => void;
}

const entornoDeRedPorDefecto = process.env.NEXT_PUBLIC_CHAIN_ENV === 'testnet' ? 'testnet' : 'mainnet';
const redPredeterminada = REDES[entornoDeRedPorDefecto][0]; // Ethereum

export const MetamaskContext = React.createContext<Ctx>({
  red: redPredeterminada,
  setRed: (r: Red) => {},
});

export const ContextProvider: React.FC<{}> = ({ children }) => {
  const [red, setRed] = useState<Red>(redPredeterminada);

  return <MetamaskContext.Provider value={{red, setRed}}>{children}</MetamaskContext.Provider>;
};
