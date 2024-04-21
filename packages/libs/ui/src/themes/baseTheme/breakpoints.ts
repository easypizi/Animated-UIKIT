import type { ThemeBreakpoints } from '../types';

const step = 0.05;

export const breakpoints: ThemeBreakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  up(key) {
    const value = typeof this.values[key] === 'number' ? this.values[key] : key;
    return `@media (min-width:${value}px)`;
  },
  down(key) {
    const value = typeof this.values[key] === 'number' ? this.values[key] : key;
    return `@media (max-width:${value - step}px)`;
  },
  between(start, end) {
    const endIndex = this.keys.indexOf(end as never);

    const maxWidth =
      endIndex !== -1 && typeof this.values[this.keys[endIndex]] === 'number'
        ? this.values[this.keys[endIndex]]
        : (end as number);

    return `@media (min-width:${
      typeof this.values[start] === 'number' ? this.values[start] : start
    }px) and (max-width:${maxWidth - step}px)`;
  },
  only(key) {
    if (this.keys.indexOf(key as never) + 1 < this.keys.length) {
      return this.between(key, this.keys[this.keys.indexOf(key as never) + 1]);
    }

    return this.up(key);
  },
  not(key) {
    const keyIndex = this.keys.indexOf(key as never);
    if (keyIndex === 0) {
      return this.up(this.keys[1]);
    }
    if (keyIndex === this.keys.length - 1) {
      return this.down(this.keys[keyIndex]);
    }

    return this.between(
      key,
      this.keys[this.keys.indexOf(key as never) + 1],
    ).replace('@media', '@media not all and');
  },
};
