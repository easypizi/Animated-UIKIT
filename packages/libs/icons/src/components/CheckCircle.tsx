import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.5-3a1 1 0 0 1 0 1.414l-4.793 4.793a1 1 0 0 1-1.414 0L8 12.914A1 1 0 1 1 9.414 11.5L11 13.086 15.086 9A1 1 0 0 1 16.5 9"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckCircle;
