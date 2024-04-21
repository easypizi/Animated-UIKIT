import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSmallCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m8.417 10 3.586 3.585L15.589 10a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0l-4.293-4.293A1 1 0 0 1 8.417 10"
    />
  </svg>
);
export default SvgSmallCaretDown;
