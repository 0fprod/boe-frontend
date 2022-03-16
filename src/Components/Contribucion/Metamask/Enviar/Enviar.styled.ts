import styled from 'styled-components';
import { CustomTheme } from '../../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const EnviarWrapper = styled.form`
  padding: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  label {
    width: 7rem;
  }
`;

export const SumbitWrapper = styled.div`
  display: flex;
  padding: 2rem;
`

export const CantidadInput = styled.input`
  padding: 0.25rem;
  width: 7rem;
`

export const Submit = styled.input`
  margin: 0 auto;
  border: none;
  cursor: pointer;
  padding: 0.25rem 1rem;
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
`;
