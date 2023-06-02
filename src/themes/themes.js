export const base = {
  fonts: {
    primary: 'Rubik, system-ui, sans-serif',
  },
  borderRadius: {
    button: '0.4rem',
  },
  boxShadow: {
    button: '0px 12px 15px .5px rgba(0, 0, 0, 0.12)',
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
    100: 'hsl(180, 9.090909090909067%, 97.84313725490196%)',
    200: 'hsl(229, 8%, 60%)',
    300: '#485489',
    600: 'hsl(229, 31%, 21%)',
  },
};

export const mainTheme = {
  primary: {
    focusOutline: palette.primary[400],
    ctaBtnBg: palette.primary[400],
    btnPrimary: palette.primary[400],
  },
  secondary: {
    ctaNavBtn: palette.secondary[400],
    ctaNavBtnHover: palette.secondary[400],
    ctaNavBtnBorder: palette.secondary[400],
  },
  neutral: {
    h1Color: palette.neutral[600],
    secondaryBtnOutlineHover: palette.neutral[600],
    secondaryBtnColor: palette.neutral[300],
    pHeroColor: palette.neutral[200],
    secondaryBtn: palette.neutral[100],
  },
};
