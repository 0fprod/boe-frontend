import React, { useReducer, useState } from 'react';
import { useRedes } from '../Hooks/useRedes';
import { Red } from '../Models/redes.model';
import { REDES } from '../utils/redes';
import { getRedPorChainId } from '../utils/utils';

interface Ctx {
  red?: Red;
  cambiarRedPorChainId: (chanId?: number) => void;
}


export const MetamaskContext = React.createContext<Ctx>({
  cambiarRedPorChainId: (chanId?: number) => {},
});

export const ContextProvider: React.FC<{}> = ({ children }) => {
  const redesDisponibles = useRedes()
  const [red, setRed] = useState<Red>();

  const actualizarRed = (chainId?: number) => {
    if (chainId) {
      const red = getRedPorChainId(redesDisponibles, chainId);
      red && setRed(red);
    }
  };

  return <MetamaskContext.Provider value={{ red, cambiarRedPorChainId: actualizarRed }}>{children}</MetamaskContext.Provider>;
};
