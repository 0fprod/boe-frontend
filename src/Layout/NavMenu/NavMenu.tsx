import Link from 'next/link';
import React from 'react';
import { StyledAnchor, StyledLi, StyledNav, StyledUl } from './NavMenu.styled';
import MetamaskIcon from '/public/metamask.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {}

export const NavMenu: React.FC<Props> = ({}) => {
  const { pathname } = useRouter();

  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <Link href="/" passHref>
            <StyledAnchor className={pathname === '/' ? 'active' : ''}>Contratos</StyledAnchor>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/estadisticas" passHref>
            <StyledAnchor className={pathname === '/estadisticas' ? 'active' : ''}> Estadísticas</StyledAnchor>
          </Link>
        </StyledLi>
        {/* <StyledLi>
          <Link href="/informacion" passHref>
            <StyledAnchor className={pathname === '/informacion' ? 'active' : ''}>Información</StyledAnchor>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/contribucion" passHref>
            <StyledAnchor className={pathname === '/contribucion' ? 'active' : ''}>
              Contribuir&nbsp;<Image src={MetamaskIcon} width={16} height={16} alt="metamask logo" />
            </StyledAnchor>
          </Link>
        </StyledLi> */}
      </StyledUl>
    </StyledNav>
  );
};
