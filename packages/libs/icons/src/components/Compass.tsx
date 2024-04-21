import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.949 15.684a.5.5 0 0 1-.633-.633l1.526-4.577a1 1 0 0 1 .632-.632l4.577-1.526a.5.5 0 0 1 .633.633l-1.526 4.577a1 1 0 0 1-.632.632z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCompass;
