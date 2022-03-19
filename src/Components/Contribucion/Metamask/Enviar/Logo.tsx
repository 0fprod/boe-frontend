import Image from 'next/image';
import { useContext } from 'react';
import { MetamaskContext } from '../../../../Context/metamask.context';
import { LogoWrapper } from './Logo.styled';

interface Props {
  size: number;
}
export const Logo = ({ size }: Props) => {
  const { red } = useContext(MetamaskContext);
  const srcLogo = red && red.logoURL ? red.logoURL : '/default.webp';

  return (
    <LogoWrapper>
      <Image src={srcLogo} alt="chain logo" width={size} height={size} layout="intrinsic" />
    </LogoWrapper>
  );
};
