import styled from 'styled-components';
import { CustomTheme } from '../../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const BeneficiariosWrapper = styled.section`
  padding-block: 1rem;
  padding-inline: 0.5rem;
  border-radius: 0.15rem;
  background-color: ${({ theme }: Props) => theme.colors.lightGray};
  overflow-x: scroll;
`;

export const WrapperLabel = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  padding-inline: 0.7rem;
  margin-bottom: 0.6rem;
  margin-bottom: 1.3rem;
`;

export const BeneficiariosBody = styled.table`
  padding: 0;
  width: 100%;
  background-color: ${({ theme }: Props) => theme.colors.foregroundLight};
  border: 1px solid ${({ theme }: Props) => theme.colors.lightGray};
  border-collapse: collapse;

  @media (max-width: 699px) {
    display: none;
  }
`;

export const BeneficiariosBodyMobile = styled.div`
  background-color: rgb(255, 255, 255);

  @media (min-width: 700px) {
    display: none;
  }
`;

export const BeneficiarioItemHeader = styled.th`
  font-weight: 500;
  padding: 0;
  font-size: 1rem;
  padding: 0.6rem 0.6rem;
  :not(:first-child) {
    border-left: 1px solid ${({ theme }: Props) => theme.colors.lightGray};
  }
`;

export const BeneficiarioTableCell = styled.td`
  font-size: 1.05rem;
  border-top: 1px solid ${({ theme }: Props) => theme.colors.lightGray};
  padding: 0.6rem 0.6rem;
  color: ${({ theme }: Props) => theme.colors.foregroundDark};
  :not(:first-child) {
    border-left: 1px solid ${({ theme }: Props) => theme.colors.lightGray};
  }
  :nth-child(4) {
    text-align: center;
  }
  :last-child {
    font-size: 1rem;
  }
`;
