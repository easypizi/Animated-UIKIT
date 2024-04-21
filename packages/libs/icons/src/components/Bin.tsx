import * as React from 'react';
import type { SVGProps } from 'react';

const SvgBin = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 1a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1.118l.771 13.117A2 2 0 0 0 6.886 22h10.228a2 2 0 0 0 1.997-1.883L19.882 7H21a1 1 0 1 0 0-2h-4V3a2 2 0 0 0-2-2zm6 4V3H9v2zm-5.25 5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m5.5 1a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBin;
