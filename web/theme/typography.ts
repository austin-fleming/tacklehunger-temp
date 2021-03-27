import { ThemeOptions } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const typographyConstants = {
  fontFamily: "'Red Hat Display', sans-serif",
  letterSpacing: {
    lg: 0.05,
    md: 0.015,
  },
  lineHeight: 1.5,
};

const trackMdTypography: CSSProperties = {
  letterSpacing: `${typographyConstants.letterSpacing.md}em`,
  lineHeight: typographyConstants.lineHeight,
};

const trackLgTypography: CSSProperties = {
  letterSpacing: `${typographyConstants.letterSpacing.lg}em`,
  lineHeight: typographyConstants.lineHeight,
};

/**
 * Body-derived styles
 */

export const bodyTypography: CSSProperties = {
  ...trackMdTypography,
  fontWeight: 400,
};

export const alertTypography: CSSProperties = {
  ...bodyTypography,
  fontSize: '1.0625rem',
};

export const toolTipTypography: CSSProperties = {
  ...bodyTypography,
  fontSize: '0.825rem',
};

/**
 * Menu & Link Styles
 */

export const menuTypography: CSSProperties = {
  ...trackLgTypography,
  fontSize: '1rem',
  fontWeight: 400,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
};

// Used in Links and Buttons that look like Links
export const textlinkStyles: CSSProperties = {
  // Include cursor to ensure we always show a pointer on things that look clickable
  cursor: 'pointer',
  fontWeight: 700,
  // Include the textTransform because a TextButton has uppercase because of having button styles
  textTransform: 'inherit',
};

/**
 * Heading styles
 */

export const headingTypography = (fontSize: number): CSSProperties => ({
  ...trackLgTypography,
  fontSize: `${fontSize}rem`,
  fontWeight: 700,
  letterSpacing: `${typographyConstants.letterSpacing.md}em`,
});

export const typography: ThemeOptions['typography'] = {
  // CS: TODO: the body size on the orginal was set to 18px - investigate setting this to 18 too - I think it will require a lot of rework though
  // fontSize: 18, // MUI default is 14
  body1: {
    ...bodyTypography,
  },
  button: {
    ...trackLgTypography,
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  fontFamily: typographyConstants.fontFamily,
  // Should semantically only be used once per page
  h1: {
    ...headingTypography(1.75),
  },
  // Make h2s visually the same as a h1
  h2: {
    ...headingTypography(1.75),
  },
  h3: {
    ...headingTypography(1.125),
  },
  h4: {
    ...headingTypography(1),
  },
  h5: {
    // cs: somewhat temporary until I implement review typography settings
    ...headingTypography(1),
    textTransform: 'uppercase',
  },
  menu: {
    ...menuTypography,
  },
  subtitle1: {
    fontSize: '1.0625rem',
    fontWeight: 'bold',
  },
};
