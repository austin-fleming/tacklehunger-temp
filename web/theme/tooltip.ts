import { alpha, ThemeOptions } from '@material-ui/core';
import { defaultMuiTheme } from 'theme/default';
import { toolTipTypography } from 'theme/typography';

const backgroundColor = alpha(defaultMuiTheme.palette.common.black, 0.8);

export const componentsTooltip: ThemeOptions['components'] = {
  MuiTooltip: {
    defaultProps: {
      arrow: true,
      leaveDelay: 250,
    },
    styleOverrides: {
      arrow: {
        color: backgroundColor,
      },
      tooltip: {
        ...toolTipTypography,
        backgroundColor,
        boxShadow: defaultMuiTheme.shadows[4],
        padding: defaultMuiTheme.spacing(1, 2),
      },
    },
  },
};
