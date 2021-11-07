import { CustomTheme } from './theme/theme.model';

export const customTheme: CustomTheme = {
  breakpoints: {
    tablet: 'max-width: 1280px',
    desktop: 'max-width: 1280px',
    xlarge: 'min-width: 1440px',
  },
  colors: {
    primary: '#C7FFED',
    secondary: '#BBC8CA',
    accent: '#20A39E',
    error: '#F06449',
    success: '#8BF8B5',
    foregroundDark: '#2D2A32',
    foregroundLight: '#FFFFFF',
    warning: '#FFBA49',
  },
  fonts: {
    desktop: {
      h1: { size: '5rem' },
      h2: { size: '3rem' },
      h3: { size: '2.75rem' },
      h4: { size: '2.5rem' },
      h5: { size: '2rem' },
      h6: { size: '1.5rem' },
      intro: { size: '1.5rem' },
      body: { size: '1rem' },
      small: { size: '0.875rem' },
    },
    tablet: {
      h1: { size: '3rem' },
      h2: { size: '2.25rem' },
      h3: { size: '2.125rem' },
      h4: { size: '2rem' },
      h5: { size: '1.75rem' },
      h6: { size: '1.125rem' },
      intro: { size: '1.25rem' },
      body: { size: '1rem' },
      small: { size: '0.875rem' },
    },
    mobile: {
      h1: { size: '2.75rem' },
      h2: { size: '2.125rem' },
      h3: { size: '2rem' },
      h4: { size: '1.75rem' },
      h5: { size: '1.5rem' },
      h6: { size: '1.125rem' },
      intro: { size: '1.25rem' },
      body: { size: '1rem' },
      small: { size: '0.875rem' },
    },
  },
};
