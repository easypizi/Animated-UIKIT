/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */

export const getColorByString = (value: string): string => {
  let hash = 0;
  if (value.length === 0) return '#000000';
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const result = (hash >> (i * 8)) & 255;
    color += `00${result.toString(16)}`.slice(-2);
  }
  return color;
};
