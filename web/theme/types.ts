/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Theme as MUITheme } from '@material-ui/core/styles';
// Include MUI lab types: https://next.material-ui.com/components/about-the-lab/#typescript
import '@material-ui/lab/themeAugmentation';
import { cssMixins } from './cssMixins';

declare module '@material-ui/core/styles/zIndex' {
  export interface ZIndex {
    appBanner: number;
  }
}

// Provide typings for custom theme options - they need to be set as interfaces as they are extending
declare module '@material-ui/core/styles/createMuiTheme' {
  export interface Theme {
    appBarHeight: number;
    cssMixins: typeof cssMixins;
    isMobile: boolean;
    shrinkNav: boolean;
  }
  export interface ThemeOptions {
    appBarHeight: number;
    cssMixins: typeof cssMixins;
    isMobile: boolean;
    shrinkNav: boolean;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  export interface Palette {
    alert: PaletteColor;
    attention: PaletteColor;
    brandBlue: PaletteColor;
    brandPurple: PaletteColor;
    pale: PaletteColor;
    warningLight: PaletteColor;
  }
  export interface PaletteOptions {
    alert: PaletteColorOptions;
    attention: PaletteColorOptions;
    brandBlue: PaletteColorOptions;
    brandPurple: PaletteColorOptions;
    pale: PaletteColorOptions;
    warningLight: PaletteColorOptions;
  }
  export interface TypeText {
    tertiary: string;
  }
}

declare module '@material-ui/core/styles/createTypography' {
  export interface TypographyOptions {
    menu: TypographyStyle;
  }
  export interface Typography {
    menu: string;
  }
}

declare module '@material-ui/core/styles/createBreakpoints' {
  export interface BreakpointOverrides {
    nav: true;
  }
}

declare module '@emotion/react' {
  // Disable this because we don't want to add any properties
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MUITheme {}
}
