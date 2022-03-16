import { createContext, useEffect, useState } from 'react';
import { hooks } from '../Conectores/metamask';
import { EntornosDeRed, Red } from '../Models/redes.model';
import { REDES } from '../utils/redes';

interface Props {
}

export const RedContext = createContext<Red | undefined>(undefined);
const { useChainId } = hooks;

export const RedProvider: React.FC<Props> = ({ children }) => {
  const chainId = useChainId();
  const entornoDeRedPorDefecto: EntornosDeRed = process.env.NEXT_PUBLIC_CHAIN_ENV === 'testnet' ? 'testnet' : 'mainnet';
  const [red, setRed] = useState<Red>();

  useEffect(() => {
    const red = REDES[entornoDeRedPorDefecto].find((r) => r.chainId === chainId);
    setRed(red);
  }, [chainId, entornoDeRedPorDefecto]);

  return <RedContext.Provider value={red}>{children}</RedContext.Provider>;
};
