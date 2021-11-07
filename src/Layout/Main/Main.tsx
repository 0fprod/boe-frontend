import React from 'react';
import { StyledMain } from './Main.styled';

interface Props {}

export const Main: React.FC<Props> = ({ children }) => <StyledMain>{children}</StyledMain>;
