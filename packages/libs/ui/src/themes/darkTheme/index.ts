import type { Theme } from '../types';
import { baseTheme } from '../baseTheme';
import { palette } from './palette';

export const darkTheme: Theme = {
  ...baseTheme,
  palette,
};
