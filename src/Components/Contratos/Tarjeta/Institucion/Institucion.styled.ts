import styled from 'styled-components';
import { CustomTheme } from '../../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const InstitucionWrapper = styled.ul`
  padding: 0 1rem;
  list-style-type: none;
  position: relative;
`;

export const StyledLabel = styled.span`
  font-weight: bolder;
  color: ${({ theme }: Props) => theme.colors.foregroundDark};
  margin-right: 0.5rem;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-block: 0.2rem;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
  }
`;

export const WrapperLabel = styled.li`
  position: absolute;
  top: -1rem;
  font-size: 0.875rem;
  text-decoration: underline;
  text-underline-position: under;
`;
