import styled from 'styled-components';
import { CustomTheme } from '../../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}
export const BeneficiarioStyle = styled.div`
  padding: 1rem 0;
  position: relative;
  border-bottom: solid 1px ${({ theme }: Props) => theme.colors.lightGray};
`;

export const BeneficiarioIconContainer = styled.button`
  background-color: transparent;
  border: none;
`;

export const BeneficiarioInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding-left: 3.7rem;
`;

export const BeneficiarioInformation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  > span:nth-child(1) {
    font-weight: 500;
  }
`;

export const ExtraInfo = styled.div<{ isExpanded: boolean }>`
  max-height: ${({ isExpanded }) => (isExpanded ? '5rem' : '0rem')};
  transition: 0.25s;
  overflow: hidden;
`;

export const Coste = styled.span`
  color: ${({ theme }: Props) => theme.colors.error};
`;
