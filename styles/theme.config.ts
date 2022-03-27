import { CustomTheme } from './theme/theme.model';

export const customTheme: CustomTheme = {
  breakpoints: {
    tablet: 'min-width: 768px',
    desktop: 'min-width: 1024px',
    xlarge: 'min-width: 1440px',
  },
  colors: {
    primary: '#6495ED',
    secondary: '#20A39E',
    accent: '#BBC8CA',
    error: '#F06449',
    success: '#8BF8B5',
    foregroundDark: '#2D2A32',
    foregroundLight: '#FFFFFF',
    warning: '#FFBA49',
    lightGray: '#f5f5f5',
  },
  fonts: {
    desktop: {
      intro: { size: '1.5rem' },
      body: { size: '1.375rem' },
      small: { size: '1rem' },
    },
    tablet: {
      intro: { size: '1.327rem' },
      body: { size: '1.125rem' },
      small: { size: '0.875rem' },
    },
    mobile: {
      intro: { size: '1.25rem' },
      body: { size: '1rem' },
      small: { size: '0.875rem' },
    },
  },
};
