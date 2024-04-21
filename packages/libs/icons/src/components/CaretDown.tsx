import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m5.464 8.545 6.54 6.54 6.541-6.54A1 1 0 1 1 19.96 9.96l-7.248 7.248a1 1 0 0 1-1.414 0L4.05 9.96a1 1 0 0 1 1.414-1.414"
    />
  </svg>
);
export default SvgCaretDown;
