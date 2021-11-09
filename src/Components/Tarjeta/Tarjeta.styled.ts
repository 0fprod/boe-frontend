import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const TarjetaWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: ${({ theme }: Props) => theme.colors.foregroundLight};
  align-items: flex-start;
`;

export const TarjetaHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${({ theme }: Props) => theme.colors.secondary};
  font-weight: 500;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.intro.size};
  padding: 0.5rem 0;

  span[aria-label='fecha'] {
    color: ${({ theme }: Props) => theme.colors.foregroundLight};
  }
  span[aria-label='coste'] {
    color: ${({ theme }: Props) => theme.colors.warning};
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  padding: 1rem;
  margin: 1rem 0 1rem 1rem;
  background-color: ${({ theme }: Props) => theme.colors.secondary};
  color: ${({ theme }: Props) => theme.colors.foregroundLight};
`;

export const StyledDescripcion = styled.p`
  padding: 0 1rem;
`;
