import * as React from 'react';
import type { SVGProps } from 'react';

const SvgBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 0 1-12.906 6.32L18.32 7.094A7.966 7.966 0 0 1 20 12M5.68 16.906 16.906 5.68A8 8 0 0 0 5.68 16.905"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBlock;
