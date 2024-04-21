import * as React from 'react';
import type { SVGProps } from 'react';

const SvgThinArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.003 8.414 18.589 11H3.003a1 1 0 0 0 0 2h15.586l-2.586 2.585A1 1 0 0 0 17.417 17l4.293-4.293a1 1 0 0 0 0-1.414L17.417 7a1 1 0 0 0-1.414 1.414"
    />
  </svg>
);
export default SvgThinArrowRight;
