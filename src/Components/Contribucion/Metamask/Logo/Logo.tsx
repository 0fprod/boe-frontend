import Image from 'next/image';
import { useContext } from 'react';
import { RedContext } from '../../../../Context/red.context';
import { Red } from '../../../../Models/redes.model';
import { LogoWrapper } from './Logo.styled';

interface Props {
  size: number;
}
export const Logo = ({ size }: Props) => {
  const redActual = useContext<Red | undefined>(RedContext);
  const srcLogo = redActual && redActual.logoURL ? redActual.logoURL : '/default.webp';

  return (
    <LogoWrapper>
      <Image src={srcLogo} alt="chain logo" width={size} height={size} layout="intrinsic" />
    </LogoWrapper>
  );
};
