interface FontSizes {
  size: string;
}

interface Typography {
  h1: FontSizes;
  h2: FontSizes;
  h3: FontSizes;
  h4: FontSizes;
  h5: FontSizes;
  h6: FontSizes;
  intro: FontSizes;
  body: FontSizes;
  small: FontSizes;
}

interface Fonts {
  mobile: Typography;
  tablet: Typography;
  desktop: Typography;
}

export interface CustomTheme {
  breakpoints: {
    tablet: string;
    desktop: string;
    xlarge: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    warning: string;
    error: string;
    success: string;
    foregroundLight: string;
    foregroundDark: string;
    lightGray: string;
  };
  fonts: Fonts;
}
