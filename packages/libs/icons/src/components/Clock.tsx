import * as React from 'react';
import type { SVGProps } from 'react';

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.5.866A1 1 0 0 1 11 12V8.5a1 1 0 1 1 2 0v2.923l2.964 1.711a1 1 0 1 1-1 1.732z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClock;
