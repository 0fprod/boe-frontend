import styled from 'styled-components';
import { CustomTheme } from '../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const TarjetaWrapper = styled.article`
  margin-block: 1rem;
  background-color: ${({ theme }: Props) => theme.colors.foregroundLight};

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    margin: 2rem auto 0 auto;
    max-width: 90vw;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    margin: 2.5rem auto 0 auto;
    max-width: 70vw;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.xlarge}) {
    margin: 3rem auto 0 auto;
    max-width: 60vw;
  }
`;

export const TarjetaHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }: Props) => theme.colors.secondary};
  font-weight: 500;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.intro.size};
  padding: 0.5rem 1rem;

  span[aria-label='fecha'] {
    color: ${({ theme }: Props) => theme.colors.foregroundLight};
  }
  span[aria-label='coste total'] {
    color: ${({ theme }: Props) => theme.colors.warning};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.intro.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.intro.size};
  }
`;

export const TarjetaBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-block: 1rem;
  padding-inline: 1.2rem;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  background-color: ${({ theme }: Props) => theme.colors.secondary};
  color: ${({ theme }: Props) => theme.colors.foregroundLight};
`;

export const StyledDescripcion = styled.p`
  padding-block: 1rem;
  padding-inline: 1.2rem;
  border-radius: 0.15rem;
  background-color: #f5f5f5;
  line-height: 1.45;
  font-weight: 400;
  font-size: 1.2rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-top: 1rem;
`;
