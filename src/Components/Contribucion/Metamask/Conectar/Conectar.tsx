import { Web3ReactHooks } from '@web3-react/core';
import { AddEthereumChainParameter } from '@web3-react/types';
import { useContext } from 'react';
import { MetamaskContext } from '../../../../Context/metamask.context';
import { mapRedToAddEthereumChainParameter } from '../../../../Models/Mappers/redes.mapper';
import { Red } from '../../../../Models/redes.model';
import { REDES } from '../../../../utils/redes';
import { ConectarWrapper, ConnectarBtn } from './Conectar.styled';
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
  const {setRed} = useContext(MetamaskContext);

  const connect = () => {
    setRed(REDES[entornoDeRedPorDefecto][0])
    conectar(mapRedToAddEthereumChainParameter(REDES[entornoDeRedPorDefecto][0]));
  };

  const cambioDeRed = (red: Red) => {
    setRed(red)
    conectar(mapRedToAddEthereumChainParameter(red))
  };

  if (isActive && !isActivating) {
    return (
      <ConectarWrapper>
        <SelectorDeRed {...{ cambioDeRed }} />
        <ConnectarBtn onClick={desconectar}>Desconectar</ConnectarBtn>
      </ConectarWrapper>
    );
  }

  return (
    <ConectarWrapper>
      <ConnectarBtn onClick={connect} disabled={isActivating}>
        Conectar
      </ConnectarBtn>
    </ConectarWrapper>
  );
};
