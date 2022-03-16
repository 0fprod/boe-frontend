import styled from "styled-components";
import { CustomTheme } from "../../../../../styles/theme/theme.model";

interface Props {
  theme: CustomTheme;
}

export const ConectarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ConnectarBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  width: 10rem;
  background-color: ${({ theme }: Props) => theme.colors.primary};
  color: ${({ theme }: Props) => theme.colors.foregroundLight};
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};
  margin-bottom: 1rem;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
  }

  &:hover {
    background-color: ${({ theme }: Props) => theme.colors.secondary};
  }
`