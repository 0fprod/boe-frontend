import styled from 'styled-components';
import { CustomTheme } from '../../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const StyledPopUp = styled.div`
  background-color: #caf5bf;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.small.size};
  position: fixed;
  width: auto;
  bottom: 1.75rem;
  border-radius: 1rem;
  padding: 2rem;
  left:0rem;
  z-index: 1;
  word-break: break-all;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    left: 2rem;
    font-size: ${({ theme }: Props) => theme.fonts.tablet.small.size};
  }
  
  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    width: 50rem;
    font-size: ${({ theme }: Props) => theme.fonts.desktop.small.size};
    bottom: 5rem;
    left: calc(50% - 25rem);
  }
`;
