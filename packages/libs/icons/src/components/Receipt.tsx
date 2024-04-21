import * as React from 'react';
import type { SVGProps } from 'react';

const SvgReceipt = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 2a2 2 0 0 0-2 2v16.7c0 .903 1.102 1.343 1.724.69l1.668-1.751a1 1 0 0 1 1.318-.116l2.696 1.99a1 1 0 0 0 1.188 0l2.696-1.99a1 1 0 0 1 1.318.116l1.668 1.75c.622.654 1.724.214 1.724-.689V4a2 2 0 0 0-2-2zm9.5 7a1 1 0 1 0 0-2h-7a1 1 0 0 0 0 2zm-1 3.5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReceipt;
