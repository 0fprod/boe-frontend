import styled from 'styled-components';
import { CustomTheme } from '../../../../styles/theme/theme.model';

interface Props {
  theme: CustomTheme;
}

export const MetamaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-color: ${({ theme }: Props) => theme.colors.lightGray};
  margin: 0 auto;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  position: relative;
`;
