import { useEffect, useState } from 'react';
import detectProvider from '@metamask/detect-provider';

export const useCheckMetamaskInstalled = () => {
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    detectProvider({ mustBeMetaMask: true }).then((provider) => {
      setInstalled(provider !== null);
    });
  }, []);

  return installed;
};
