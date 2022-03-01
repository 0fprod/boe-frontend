export interface Red {
  name: string;
  chainId: number;
  shortName: string;
  chain: string;
  network: string;
  networkId: number;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  rpc: string[];
  faucets: string[];
  infoURL: string;
}

export type EntornosDeRed = 'mainnet' | 'testnet';
export type Redes = Record<EntornosDeRed, Red[]>;