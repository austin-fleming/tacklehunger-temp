import { darken, lighten, ThemeOptions } from '@material-ui/core';

// Palette Colors
export const colors = {
  alert: '#f21d69', // pinkish red
  attention: '#fecf83', // yellowish - app banner
  black: {
    light: '#333f48',
    main: '#262626',
  },
  brandBlue: {
    light: '#0093d7', // light blue
    main: '#024172', // dark blue (header etc.)
  },
  brandPurple: {
    // light purple - login background
    // light: '#e2e5ff',
    // pale purple payment type bg
    light: '#f0ecf4',
    // main logo purple
    main: '#6d4992',
    // mid purple - avatar border
    mid: lighten('#6d4992', 0.7),
  },
  error: '#e23834', // red
  grey: '#f8fcff', // light bluish grey
  success: '#43a048', // green
  warn: '#f57c01', // orange
  warnLess: '#fcaf17', // yellow
  white: '#ffffff', // white (seems obvious but sometimes sites need an offset white)
};

// MUI Theme does provide an augment color function but the coefficients used here are different
const customAugmentColor = (color: string) => ({
  dark: darken(color, 0.1),
  light: lighten(color, 0.1),
  main: color,
});

export const palette: ThemeOptions['palette'] = {
  alert: {
    ...customAugmentColor(colors.alert),
    contrastText: colors.white,
  },
  attention: {
    ...customAugmentColor(colors.attention),
    contrastText: colors.black.main,
  },
  background: {
    default: colors.white,
    paper: colors.white,
  },
  brandBlue: colors.brandBlue,
  brandPurple: colors.brandPurple,
  error: {
    ...customAugmentColor(colors.error),
    contrastText: colors.white,
  },
  pale: {
    ...customAugmentColor(colors.grey),
    contrastText: colors.black.main,
  },
  primary: {
    main: colors.brandBlue.light,
  },
  secondary: {
    main: colors.brandBlue.main,
  },
  success: {
    ...customAugmentColor(colors.success),
    contrastText: colors.white,
  },
  text: {
    primary: colors.black.main, // main text color
    // secondary: colors.black, // labels
    tertiary: colors.black.light, // text color in some tooltips and modals
  },
  warning: {
    ...customAugmentColor(colors.warn),
    contrastText: colors.white,
  },
  warningLight: {
    ...customAugmentColor(colors.warnLess),
    contrastText: colors.white,
  },
};
