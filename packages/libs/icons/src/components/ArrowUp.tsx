import * as React from 'react';
import type { SVGProps } from 'react';

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M5.46 10.955 11 5.415V21a1 1 0 0 0 2 0V5.414l5.54 5.541a1 1 0 0 0 1.415-1.414l-7.248-7.248a1 1 0 0 0-1.414 0L4.045 9.541a.997.997 0 0 0 0 1.414 1 1 0 0 0 1.414 0"
    />
  </svg>
);
export default SvgArrowUp;
