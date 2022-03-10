import { AddEthereumChainParameter, Web3ReactState } from '@web3-react/types';
import { useEffect, useState } from 'react';
import { hooks, metaMask, store } from '../../../Conectores/metamask';
import { Conectar } from './Conectar/Conectar';
import { Cuenta } from './Conectar/Cuenta';
import { Enviar } from './Conectar/Enviar';
import { Estado } from './Conectar/Estado';

const { useIsActive, useIsActivating, useError, useChainId, useProvider, useAccount } = hooks;
const { getState } = store;
export const Metamask = () => {
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const error = useError();
  const chainId = useChainId();
  const account = useAccount();
  const provider = useProvider();

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
      <Estado {...{ isActive, isActivating, error, chainId }} />
      <br />
      <Cuenta {...{ account, provider }} />
      <br />
      <Conectar isActivating={isActivating} isActive={isActive} conectar={conectar} desconectar={desconectar} />
      <br/>
    </>
  );
};
