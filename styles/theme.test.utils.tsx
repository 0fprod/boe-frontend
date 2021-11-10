import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { customTheme } from './theme.config';

export const renderWithTheme = (component: JSX.Element) => render(<ThemeProvider theme={customTheme}>{component}</ThemeProvider>);
