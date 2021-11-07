import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  background-color: ${({ theme }: Props) => theme.colors.primary};
  color: ${({ theme }: Props) => theme.colors.foregroundDark};
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};
`;
