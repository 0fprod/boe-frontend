import styled from 'styled-components';
import { CustomTheme } from '../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const BeneficiariosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  align-items: flex-start;

  div:nth-child(odd) {
    background-color: ${({ theme }: Props) => theme.colors.lightGray};
  }
`;

export const StyledBeneficiario = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 500;
  padding: 0.5rem;

  span[aria-label='coste'] {
    color: ${({ theme }: Props) => theme.colors.error};
  }
`;
