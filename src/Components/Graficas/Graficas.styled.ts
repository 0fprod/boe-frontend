import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const PresupuestoTotal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
  font-weight: 500;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.intro.size};

  span {
    color: ${({ theme }: Props) => theme.colors.error};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.intro.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.intro.size};
  }
`;

export const GraficasWrapper = styled.section`
  padding-bottom: 2rem;

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
