import { Red } from '../Models/redes.model';
import { REDES } from '../utils/redes';

export const useRedes = (): Red[] => {
  const entornoDeRedPorDefecto = process.env.NEXT_PUBLIC_CHAIN_ENV === 'testnet' ? 'testnet' : 'mainnet';
  return REDES[entornoDeRedPorDefecto];
};
