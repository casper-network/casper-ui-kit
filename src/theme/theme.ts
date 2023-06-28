import { colors } from './colors';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

export interface ThemeSchema {
  colors: { [key: string]: any };
  typography: { [key: string]: any };
  breakpoints: { [key: string]: any };
}

export const defaultTheme = {
  colors,
  typography,
  breakpoints,
};

export type TestTheme = typeof defaultTheme;
