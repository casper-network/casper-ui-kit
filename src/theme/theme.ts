import { colors } from './colors';
import { typography } from './typography';

export interface ThemeSchema {
  colors: { [key: string]: any };
  typography: { [key: string]: any };
}

export const defaultTheme = {
  colors,
  typography,
};

export type TestTheme = typeof defaultTheme;
