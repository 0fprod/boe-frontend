import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}
export const StyledMain = styled.main`
  min-height: 90vh;
  background-color: ${({ theme }: Props) => theme.colors.lightGray};
`;
