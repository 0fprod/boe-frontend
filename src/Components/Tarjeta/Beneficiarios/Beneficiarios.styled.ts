import styled from 'styled-components';
import { CustomTheme } from '../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const BeneficiariosWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  align-items: flex-start;
  list-style-type: none;

  > li:nth-child(odd) {
    background-color: ${({ theme }: Props) => theme.colors.lightGray};
  }
`;

export const BeneficarioItem = styled.li`
  width: 100%;
`;

export const StyledBeneficiario = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 500;
  padding: 0.5rem;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
  }
  span[aria-label='coste'] {
    color: ${({ theme }: Props) => theme.colors.error};
  }
`;

export const DetallesBeneficiario = styled.ul`
  padding: 0 0.5rem;
  list-style-type: none;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-block: 0.2rem;
  font-size: ${({ theme }: Props) => theme.fonts.mobile.body.size};

  @media screen and (${({ theme }: Props) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }: Props) => theme.fonts.tablet.body.size};
  }

  @media screen and (${({ theme }: Props) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }: Props) => theme.fonts.desktop.body.size};
  }
`;

export const StyledLabel = styled.span`
  font-weight: 400;
  color: ${({ theme }: Props) => theme.colors.foregroundDark};
  margin-right: 0.5rem;
`;
