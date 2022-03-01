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

  img {
    width: ${({ theme }: Props) => theme.fonts.mobile.body.size} !important;
    height: ${({ theme }: Props) => theme.fonts.mobile.body.size} !important;
  }

  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};

  span {
    color: ${({ theme }: Props) => theme.colors.error};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
    padding: 2rem;
    max-width: 80vw;

    img {
      width: ${({ theme }: Props) => theme.fonts.tablet.body.size} !important;
      height: ${({ theme }: Props) => theme.fonts.tablet.body.size} !important;
    }
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
    padding: 4rem;
    max-width: 70vw;

    img {
      width: ${({ theme }: Props) => theme.fonts.desktop.body.size} !important;
      height: ${({ theme }: Props) => theme.fonts.desktop.body.size} !important;
    }
  }`