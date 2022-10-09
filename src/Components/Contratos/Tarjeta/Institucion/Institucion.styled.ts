import styled from 'styled-components';
import { CustomTheme } from '../../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const InstitucionWrapper = styled.section`
  line-height: 1.8;
  padding-block: 1rem;
  padding-inline: 1.2rem;
  border-radius: 0.15rem;
  background-color: ${({ theme }: Props) => theme.colors.lightGray};
`;

export const StyledParagraph = styled.span`
  font-size: 1.1rem;

  ::before {
    content: ' ';
  }
`;

export const StyledLabel = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
  color: ${({ theme }: Props) => theme.colors.foregroundDark};
`;

export const WrapperLabel = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.6rem;
`;
