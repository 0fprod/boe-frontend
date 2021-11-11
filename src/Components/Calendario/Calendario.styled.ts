import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const CalendarioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 0 auto;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    max-width: 90vw;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    max-width: 70vw;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.xlarge}) {
    max-width: 60vw;
  }
`;

export const InputsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }: Props) => theme.colors.accent};
  background-color: transparent;
`;

export const StyledLabel = styled.label`
  margin-top: 1rem;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const StyledButton = styled.button`
  border: none;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.intro.size};
  color: ${({ theme }: Props) => theme.colors.foregroundLight};
  background-color: ${({ theme }: Props) => theme.colors.accent};
  padding: 0.7rem 1rem;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.intro.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.intro.size};
  }
`;
