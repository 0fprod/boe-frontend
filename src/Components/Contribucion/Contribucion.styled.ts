import styled from "styled-components";
import { CustomTheme } from "../../../styles/theme/theme.model";

interface Props {
    theme: CustomTheme;
  }
  
export const ContribucionWrapper = styled.article`
  max-width: 95vw;
  margin: 0 auto;
  padding: 1rem;

  a {
    text-decoration: underline;
  }

  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};

  > span {
    color: ${({ theme }: Props) => theme.colors.error};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
    padding: 2rem;
    max-width: 80vw;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
    padding: 4rem;
    max-width: 70vw;
  }
`

export const DestinoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DireccionDestino = styled.input`
  width: 50%;
  padding:0.25rem;
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  > input {
    margin-right: 1rem;
  }

  img {
    cursor: pointer;
  }
`

export const Tooltip = styled.span`
  display: flex;
  position: absolute;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.25rem;
  border-radius: 0.5rem;
  background-color: azure;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.small.size};
`