import Link from 'next/link';
import React from 'react';
import { StyledAnchor, StyledLi, StyledNav, StyledUl } from './NavMenu.styled';

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
          <Link href="/info" passHref>
            <StyledAnchor>Info</StyledAnchor>
          </Link>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};
