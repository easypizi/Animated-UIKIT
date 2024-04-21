import * as React from 'react';
import type { SVGProps } from 'react';

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M18.542 13.045 13 18.586V3a1 1 0 1 0-2 0v15.586l-5.541-5.54a1 1 0 0 0-1.414 1.414l7.248 7.247a1 1 0 0 0 1.414 0l7.248-7.248a.996.996 0 0 0 0-1.414 1 1 0 0 0-1.415 0"
    />
  </svg>
);
export default SvgArrowDown;
