import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const StyledNav = styled.nav`
  background-color: ${({ theme }: Props) => theme.colors.primary};
  padding-block: 12px;
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
  padding: 0 0.5rem;
  color: ${({ theme }: Props) => theme.colors.foregroundLight};
  font-size: 1.2rem;
  height: 100%;
  align-items: center;
  display: flex;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
  }

  &:hover {
    background-color: ${({ theme }: Props) => theme.colors.secondary};
  }

  &:last-child {
    a {
      display: flex;
      align-items: baseline;
    }
  }

  .active {
    text-decoration: underline;
  }
`;

export const StyledAnchor = styled.a``;
