import styled from 'styled-components';

export const BeneficiariosWrapper = styled.section`
  padding-block: 1rem;
  padding-inline: 1.2rem;
  border-radius: 0.15rem;
  background-color: #f5f5f5;
  overflow-x: scroll;
`;

export const WrapperLabel = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.6rem;
  margin-bottom: 1.3rem;
`;

export const BeneficiariosBody = styled.table`
  padding: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid #e5e7eb;
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
    border-left: 1px solid #e5e7eb;
  }
`;

export const BeneficiarioTableCell = styled.td`
  font-size: 1.05rem;
  border-top: 1px solid #e5e7eb;
  padding: 0.6rem 0.6rem;
  color: #262626;
  :not(:first-child) {
    border-left: 1px solid #e5e7eb;
  }
  :nth-child(4) {
    text-align: center;
  }
  :last-child {
    font-size: 1rem;
  }
`;
