import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const TarjetaGraficaWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  background-color: ${({ theme }: Props) => theme.colors.foregroundLight};
  align-items: center;

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
  justify-content: center;
  background-color: ${({ theme }: Props) => theme.colors.secondary};
  font-weight: 500;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.intro.size};
  color: ${({ theme }: Props) => theme.colors.foregroundLight};
  padding: 0.5rem 0;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.intro.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.intro.size};
  }
`;
