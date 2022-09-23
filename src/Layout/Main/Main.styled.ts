import styled from 'styled-components';
import { CustomTheme } from '../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}
export const StyledMain = styled.main`
  flex: 1;
  padding-block: 0 80px;
  background-color: ${({ theme }: Props) => theme.colors.lightGray};
`;
