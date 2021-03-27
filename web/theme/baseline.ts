import { ThemeOptions } from '@material-ui/core';
import { typographyConstants } from './typography';

// Alter some of the global styles applied by <CssBaseline />
export const componentsBaseline: ThemeOptions['components'] = {
  MuiCssBaseline: {
    styleOverrides: {
      '@global': {
        '.grecaptcha-badge': {
          visibility: 'hidden',
        },
        body: {
          letterSpacing: `${typographyConstants.letterSpacing.md}em`,
          lineHeight: typographyConstants.lineHeight,
        },
        button: {
          // Ensure naked button font styles are inherited
          font: 'inherit',
          letterSpacing: 'inherit',
          textAlign: 'inherit',
        },
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
};
