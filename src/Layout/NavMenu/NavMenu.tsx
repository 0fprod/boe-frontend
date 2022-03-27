import Link from 'next/link';
import React from 'react';
import { StyledAnchor, StyledLi, StyledNav, StyledUl } from './NavMenu.styled';
import MetamaskIcon from '/public/metamask.png';
import Image from 'next/image';

interface Props {}

export const NavMenu: React.FC<Props> = ({}) => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <Link href="/" passHref>
            <StyledAnchor>Contratos</StyledAnchor>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/estadisticas" passHref>
            <StyledAnchor>Estadisticas</StyledAnchor>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/informacion" passHref>
            <StyledAnchor>Informacion</StyledAnchor>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/contribucion" passHref>
            <StyledAnchor>
              Contribuir <Image src={MetamaskIcon} width={16} height={16} alt="metamask logo"/>
            </StyledAnchor>
          </Link>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};
