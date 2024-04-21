import type { ThemeSpacing } from '../types';

export const spacing: ThemeSpacing = {
  base: 4,
  get(...multipliers: Array<number | string>) {
    return multipliers
      .map((x) => {
        if (typeof x === 'number') {
          return `${x * this.base}px`;
        }
        return x;
      })
      .join(' ');
  },
};
