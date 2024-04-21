import * as React from 'react';
import type { SVGProps } from 'react';

const SvgLockOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 6.5a1 1 0 0 1-1-1V5a3 3 0 1 0-6 0v4h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V5a5 5 0 0 1 10 0v.5a1 1 0 0 1-1 1m-4 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLockOpen;
