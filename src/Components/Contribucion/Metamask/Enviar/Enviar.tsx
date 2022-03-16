import { useState, useEffect, useContext } from 'react';
import { utils, BigNumber } from 'ethers';
import { Web3ReactHooks } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';
import { CantidadInput, EnviarWrapper, InputWrapper, Submit, SumbitWrapper } from './Enviar.styled';
import { Red } from '../../../../Models/redes.model';
import { RedContext } from '../../../../Context/red.context';
import { PopUp } from './Popup';

interface Props {
  provider: ReturnType<Web3ReactHooks['useProvider']>;
  account: ReturnType<Web3ReactHooks['useAccount']>;
  destinoRef: React.RefObject<HTMLInputElement>;
  chainId?: number;
}

export const Enviar = ({ provider, chainId, account, destinoRef }: Props) => {
  const [balance, setBalance] = useState<string>();
  const [tokenNativo, setTokenNativo] = useState<BigNumber>();
  const redActual = useContext<Red | undefined>(RedContext);
  const [txHash, setTxHash] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const destinationAddrs = destinoRef.current?.value;
    const signer = provider?.getSigner();

    if (signer) {
      signer
        .sendTransaction({
          to: destinationAddrs,
          value: tokenNativo,
          chainId,
        })
        .then((tx) => {
          setTxHash(tx.hash);
          setTimeout(() => {
            setTxHash('');
          }, 4000);
        })
        .catch(console.error);
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = evt;

    if (!!value) {
      const native = value.replaceAll(',', '.');

      setTokenNativo(utils.parseUnits(native, 'ether'));
    }
  };

  useEffect(() => {
    if (provider && account) {
      provider.getBalance(account).then((response: BigNumber) => {
        setBalance(formatEther(response));
      });
    }
  }, [account, provider]);

  return (
    <>
      <EnviarWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <label>Balance:</label>
          <code>
            {balance?.substring(0, 5)}&nbsp;{redActual && redActual.nativeCurrency.symbol}
          </code>
        </InputWrapper>
        <InputWrapper>
          <label>Cantidad:</label>
          <CantidadInput type="number" onChange={handleChange} step="any" />
        </InputWrapper>
        <SumbitWrapper>
          <Submit type="submit" value="Enviar" />
        </SumbitWrapper>
      </EnviarWrapper>
      <PopUp hash={txHash} />
    </>
  );
};
