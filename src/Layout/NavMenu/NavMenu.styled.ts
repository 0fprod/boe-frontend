import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const StyledNav = styled.nav`
  background-color: ${({ theme }: Props) => theme.colors.primary};
  height: 5vh;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StyledLi = styled.li`
  color: ${({ theme }: Props) => theme.colors.foregroundDark};
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};
  height: 100%;
  align-items: center;
  display: flex;
`;

export const StyledAnchor = styled.a``;
