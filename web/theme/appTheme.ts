import { createMuiTheme } from '@material-ui/core/styles';
import { components } from './components';
import { cssMixins } from './cssMixins';
import { defaultMuiTheme } from './default';
import { palette } from './palette';
import { typography } from './typography';

// See: https://material-ui.com/customization/theming/
export const appTheme = createMuiTheme({
  appBarHeight: 0, // This is updated on render once the height is known
  breakpoints: {
    values: {
      ...defaultMuiTheme.breakpoints.values,
      nav: defaultMuiTheme.breakpoints.values.lg,
    },
  },
  components,
  cssMixins,
  isMobile: false, // updated on render once window width is known
  palette,
  shrinkNav: false, // updated on render once window width is known
  typography,
  zIndex: {
    appBanner: 950,
  },
});
