import { Web3ReactHooks } from '@web3-react/core';
import { Red } from '../../../../Models/redes.model';
import { REDES } from '../../../../utils/redes';
import { SelectorDeRed } from './SelectorDeCadena';

interface Props {
  conectar: (idRed: number) => void;
  desconectar: () => void;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
}

export const Conectar = (props: Props) => {
  const { conectar, desconectar, isActive, isActivating } = props;
  const entornoDeRedPorDefecto = process.env.NEXT_PUBLIC_CHAIN_ENV === 'testnet' ? 'testnet' : 'mainnet';

  const connect = () => {
    conectar(REDES[entornoDeRedPorDefecto][0].chainId);
  };

  const cambioDeRed = (chain: Red) => {
    conectar(chain.chainId);
  };

  if (isActive && !isActivating) {
    return (
      <>
        <SelectorDeRed {...{ cambioDeRed, entornoDeRedPorDefecto }} />
        <button onClick={desconectar}>Desconectar</button>
      </>
    );
  }

  return (
    <>
      <button onClick={connect} disabled={isActivating}>
        Conectar
      </button>
    </>
  );
};
