import { AddEthereumChainParameter } from '@web3-react/types';
import { useContext, useEffect } from 'react';
import { hooks, metaMask } from '../../../Conectores/metamask';
import { ContextProvider, MetamaskContext } from '../../../Context/metamask.context';
import { Conectar } from './Conectar/Conectar';
import { Enviar } from './Enviar/Enviar';
import { Estado } from './Estado/Estado';
import { MetamaskWrapper, InputsWrapper } from './Metamask.styled';

const { useIsActive, useIsActivating, useError, useChainId, useProvider, useAccount } = hooks;

interface Props {
  destinoRef: React.RefObject<HTMLInputElement>;
}

export const Metamask = ({ destinoRef }: Props) => {
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const error = useError();
  const chainId = useChainId();
  const account = useAccount();
  const provider = useProvider();
  const { cambiarRedPorChainId } = useContext(MetamaskContext);

  useEffect(() => {
    // Se conecta al metamask, a la red que tenga permiso de conexion concedido a este dominio
    metaMask
      .connectEagerly()
      .then((_) => {
        console.log('Metamask connected');
      })
      .catch((e) => {
        console.error('Could not connect metamask eagerly -> ', e);
      });
  }, []);

  useEffect(() => {
    cambiarRedPorChainId(chainId);
  }, [chainId, cambiarRedPorChainId]);

  const conectar = (red: AddEthereumChainParameter) => {
    metaMask.activate(red).catch((e) => {
      console.error('Could not activate metamask ->', e);
    });
  };

  const desconectar = () => {
    metaMask.deactivate();
  };

  return (
      <MetamaskWrapper>
        <InputsWrapper>
          <Conectar {...{ isActivating, isActive, conectar, desconectar, provider }} />
          {isActive && <Enviar destinoRef={destinoRef} account={account} provider={provider} chainId={chainId} />}
          <Estado {...{ isActive, isActivating, error, provider }} />
        </InputsWrapper>
      </MetamaskWrapper>
  );
};
