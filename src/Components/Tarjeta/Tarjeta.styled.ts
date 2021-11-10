import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const TarjetaWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  background-color: ${({ theme }: Props) => theme.colors.foregroundLight};
  align-items: flex-start;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    margin: 2rem auto;
    max-width: 90vw;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    margin: 2.5rem auto;
    max-width: 70vw;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.xlarge}) {
    margin: 3rem auto;
    max-width: 60vw;
  }
`;

export const TarjetaHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${({ theme }: Props) => theme.colors.secondary};
  font-weight: 500;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.intro.size};
  padding: 0.5rem 0;

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

export const StyledLink = styled.a`
  text-decoration: none;
  padding: 1rem;
  margin: 1rem 0 1rem 1rem;
  background-color: ${({ theme }: Props) => theme.colors.secondary};
  color: ${({ theme }: Props) => theme.colors.foregroundLight};
`;

export const StyledDescripcion = styled.p`
  padding: 0 1rem;
  margin: 0;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
  }
`;
