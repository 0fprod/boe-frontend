import styled from 'styled-components';
import { CustomTheme } from '../../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const BeneficiarioInformation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;

  > span:nth-child(1) {
    font-weight: 500;
  }
`;

export const BeneficiarioInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding-left: 3.7rem;
`;

export const BeneficiarioStyle = styled.div`
  padding-bottom: 2rem;
  padding-right: 0.5rem;
  position: relative;

  :not(:first-child) {
    border-block-style: solid;
    border-block-color: ${({ theme }: Props) => theme.colors.foregroundLight};
    border-top-width: 3px;
  }
`;

export const BeneficiarioIconContainer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  > svg {
    position: absolute;
    top: 0.4rem;
    left: 0.6rem;
    width: 2.5rem;
    height: 2.5rem;
    fill: ${({ theme }: Props) => theme.colors.primary};
    stroke: white;
  }
`;

export const Coste = styled.span`
  color: ${({ theme }: Props) => theme.colors.error};
`;
