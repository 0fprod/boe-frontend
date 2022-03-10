import type { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';
import { Web3ReactHooks } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

interface Props {
  account: ReturnType<Web3ReactHooks['useAccount']>;
  provider: ReturnType<Web3ReactHooks['useProvider']>;
}

export const Cuenta = ({ account, provider }: Props) => {
  const [balance, setBalance] = useState<string>();

  useEffect(() => {
    if (provider && account) {
      provider.getBalance(account).then((response: BigNumber) => {
        setBalance(formatEther(response));
      });
    }
  }, [account, provider]);

  return <> Balance: {balance}</>;
};
