import styled from 'styled-components';
import { CustomTheme } from '../../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
    align-items: center;
    flex-direction: row;
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
    align-items: center;
    flex-direction: row;
  }
`;

export const Selector = styled.select`
  padding: 0.25rem;
  cursor: pointer;
  margin: 0.15rem 0;

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    margin-left: 1rem;
  }
`;
