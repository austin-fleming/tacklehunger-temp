import { ThemeOptions } from '@material-ui/core';
import { defaultMuiTheme } from './default';
import { textlinkStyles } from './typography';

const padding = defaultMuiTheme.spacing(3, 4);

export const componentsButtons: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      disableElevation: false,
      type: 'button',
    },
    styleOverrides: {
      colorInherit: {
        // When using the inherit variant, we still want to keep the bordercolor as set by MUI (mid-grey)
        borderColor: undefined,
      },
      contained: {
        fontSize: '25px',
        padding,
        textAlign: 'center',
      },
      outlined: {
        padding,
      },
      root: {
        // Remove browser spinnes
        '& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
        // Firefox
        "& input[type='number']": {
          '-moz-appearance': 'textfield',
        },

        // Add some default styles to all buttons
        borderRadius: 10,
        // For mobile touch targets
        minHeight: '44px',
        minWidth: defaultMuiTheme.spacing(14),
        padding,
      },
      sizeSmall: {
        fontSize: '0.875rem',
        minWidth: 'auto',
        padding: defaultMuiTheme.spacing(1, 3),
      },
      // Use the textLinkStyles for buttons with variant='text'
      text: {
        ...textlinkStyles,
        padding,
      },
    },
  },
};
