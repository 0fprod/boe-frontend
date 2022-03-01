import { Web3ReactHooks } from '@web3-react/core';
import { AddEthereumChainParameter } from '@web3-react/types';
import { mapRedToAddEthereumChainParameter } from '../../../../Models/Mappers/redes.mapper';
import { Red } from '../../../../Models/redes.model';
import { REDES } from '../../../../utils/redes';
import { SelectorDeRed } from './SelectorDeCadena';

interface Props {
  conectar: (red: AddEthereumChainParameter) => void;
  desconectar: () => void;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
}

export const Conectar = (props: Props) => {
  const { conectar, desconectar, isActive, isActivating } = props;
  const entornoDeRedPorDefecto = process.env.NEXT_PUBLIC_CHAIN_ENV === 'testnet' ? 'testnet' : 'mainnet';

  const connect = () => {
    conectar(mapRedToAddEthereumChainParameter(REDES[entornoDeRedPorDefecto][0]));
  };

  const cambioDeRed = (chain: Red) => {
    conectar(mapRedToAddEthereumChainParameter(chain))
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
