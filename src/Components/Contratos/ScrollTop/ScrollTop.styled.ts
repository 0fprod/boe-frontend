import styled from 'styled-components';
import { CustomTheme } from '../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const ScrollToTop = styled.div<Props>`
  position: fixed;
  right: 1rem;
  top: 3.5rem;
  z-index: 99;

  width: 1.5rem;
  height: 1.5rem;
  font-size: 2rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    right: 1.5rem;
    top: 4rem;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    right: 1rem;
    top: 3rem;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.xlarge}) {
    right: 2rem;
    top: 5rem;
    font-size: 3rem;
  }
`;
