import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M17 4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z"
    />
    <path
      fill="currentColor"
      d="M19 18V7a1 1 0 1 1 2 0v11a4 4 0 0 1-4 4H8a1 1 0 1 1 0-2h9a2 2 0 0 0 2-2"
    />
  </svg>
);
export default SvgCopy;
