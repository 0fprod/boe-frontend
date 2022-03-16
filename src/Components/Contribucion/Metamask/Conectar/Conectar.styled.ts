import styled from 'styled-components';
import { CustomTheme } from '../../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const ConectarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.xlarge}) {
    flex-direction: row;
  }
`;

export const ConnectarBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  width: 10rem;
  background-color: ${({ theme }: Props) => theme.colors.primary};
  color: ${({ theme }: Props) => theme.colors.foregroundLight};
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
  }

  &:hover {
    background-color: ${({ theme }: Props) => theme.colors.secondary};
  }
`;
