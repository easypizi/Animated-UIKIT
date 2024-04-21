import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M8 20.666c-1.333.77-3-.192-3-1.731V5.065c0-1.54 1.667-2.502 3-1.731l12.003 6.934c1.332.77 1.332 2.694 0 3.464z"
    />
  </svg>
);
export default SvgPlay;
