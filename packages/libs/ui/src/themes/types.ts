import type { CSSObject } from 'styled-components';

export interface ThemePalette {
  background: {
    main: string;
    overlay: string;
  };

  neutral100: string;
  neutral80: string;
  neutral60: string;
  neutral40: string;
  neutral20: string;
  neutral10: string;
  neutral5: string;

  primary100: string;
  primary10: string;

  success100: string;
  success10: string;

  warning100: string;
  warning10: string;

  danger100: string;
  danger10: string;
}

export type ThemePaletteKey = keyof Omit<ThemePalette, 'background'>;

export interface ThemeSpacing {
  base: number;
  get(...multipliers: Array<number | string>): string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontFamilyMonoSpace: string;
  base: CSSObject;
  baseMonoSpace: CSSObject;
  headerXL: CSSObject;
  headerLG: CSSObject;
  headerMD: CSSObject;
  headerSM: CSSObject;
  headerXS: CSSObject;
  textLGBold: CSSObject;
  textMDBold: CSSObject;
  textSMBold: CSSObject;
  textXSBold: CSSObject;
  textLG: CSSObject;
  textMD: CSSObject;
  textSM: CSSObject;
  textXS: CSSObject;
  captureSMBold: CSSObject;
  captureSM: CSSObject;
}

export type ThemeTypographyKey = keyof Omit<ThemeTypography, 'fontFamily'>;

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ThemeBreakpoints {
  keys: Array<Breakpoint>;
  values: Record<Breakpoint, number>;
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (from: Breakpoint | number, to: Breakpoint | number) => string;
  only: (key: Breakpoint | number) => string;
  not: (key: Breakpoint | number) => string;
}

export interface ThemeZIndex {
  sidebar: number;
  header: number;
  popper: number;
  drawer: number;
  modal: number;
  snackbar: number;
}

export interface Theme {
  breakpoints: ThemeBreakpoints;
  palette: ThemePalette;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  zIndex: ThemeZIndex;
}
