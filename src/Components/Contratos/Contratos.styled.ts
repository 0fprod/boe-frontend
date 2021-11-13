import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const Mensaje = styled.article`
  width: 80vw;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.intro.size};

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.intro.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.intro.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.intro.size};
  }
`;

export const Cargando = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${({ theme }: Props) => theme.colors.secondary} transparent ${({ theme }: Props) => theme.colors.secondary} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
