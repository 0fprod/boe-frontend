import { Web3ReactHooks } from '@web3-react/core';
import { AddEthereumChainParameter } from '@web3-react/types';
import { useRedes } from '../../../../Hooks/useRedes';
import { mapRedToAddEthereumChainParameter } from '../../../../Models/Mappers/redes.mapper';
import { Red } from '../../../../Models/redes.model';
import { ConectarWrapper, ConectarBtn, DesconectarBtn } from './Conectar.styled';
import { SelectorDeRed } from './SelectorDeCadena';

interface Props {
  conectar: (red: AddEthereumChainParameter) => void;
  desconectar: () => void;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
}

export const Conectar = (props: Props) => {
  const { conectar, desconectar, isActive, isActivating } = props;
  const redesDisponibles = useRedes();

  const connect = () => {
    conectar(mapRedToAddEthereumChainParameter(redesDisponibles[0]));
  };

  const cambioDeRed = (red: Red) => {
    conectar(mapRedToAddEthereumChainParameter(red));
  };

  if (isActive && !isActivating) {
    return (
      <ConectarWrapper>
        <SelectorDeRed {...{ cambioDeRed }} />
        <DesconectarBtn onClick={desconectar}>Desconectar</DesconectarBtn>
      </ConectarWrapper>
    );
  }

  return (
    <ConectarWrapper>
      <ConectarBtn onClick={connect} disabled={isActivating}>
        Conectar
      </ConectarBtn>
    </ConectarWrapper>
  );
};
