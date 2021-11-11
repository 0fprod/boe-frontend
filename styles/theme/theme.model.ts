interface FontSizes {
  size: string;
}

interface Typography {
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
