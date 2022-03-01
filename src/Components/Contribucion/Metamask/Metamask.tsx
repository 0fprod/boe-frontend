import { AddEthereumChainParameter } from '@web3-react/types';
import { useEffect } from 'react';
import { hooks, metaMask } from '../../../Conectores/metamask';
import { Conectar } from './Conectar/Conectar';
import { Estado } from './Conectar/Estado';

const { useIsActive, useIsActivating, useError, useChainId } = hooks;

export const Metamask = () => {
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const error = useError();
  const chainId = useChainId();

  useEffect(() => {
    // Se conecta al metamask, a la red que tenga permiso de conexion concedido a este dominio
    metaMask.connectEagerly();
  }, []);

  const conectar = (red: AddEthereumChainParameter) => {
    metaMask.activate(red);
  };

  const desconectar = () => {
    metaMask.deactivate();
  };

  return (
    <>
      <>
        <Estado {...{ isActive, isActivating, error, chainId }} />
        <br />
        <Conectar isActivating={isActivating} isActive={isActive} conectar={conectar} desconectar={desconectar} />
      </>
    </>
  );
};
