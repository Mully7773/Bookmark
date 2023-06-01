export const base = {
  fonts: {
    primary: 'Rubik, system-ui, sans-serif',
  },
};

// Theme
const palette = {
  primary: {
    400: 'hsl(231, 69%, 60%)',
  },
  secondary: {
    400: 'hsl(0, 94%, 66%)',
  },
  neutral: {
    200: 'hsl(229, 8%, 60%)',
    600: 'hsl(229, 31%, 21%)',
  },
};

export const mainTheme = {
  primary: {
    focusOutline: palette.primary[400],
    ctaBtnBg: palette.primary[400],
  },
  secondary: {
    ctaNavBtn: palette.secondary[400],
    ctaNavBtnHover: palette.secondary[400],
    ctaNavBtnBorder: palette.secondary[400],
  },
};
