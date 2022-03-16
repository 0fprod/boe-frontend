import { AddEthereumChainParameter } from '@web3-react/types';

// Estructura de https://chainlist.org/chains.json
export interface Red {
  name: string;
  chainId: number;
  shortName: string;
  chain: string;
  network: string;
  networkId: number;
  nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
  rpc: string[];
  faucets: string[];
  infoURL: string;
  logoURL?: string;
}

export type EntornosDeRed = 'mainnet' | 'testnet';
export type Redes = Record<EntornosDeRed, Red[]>;

