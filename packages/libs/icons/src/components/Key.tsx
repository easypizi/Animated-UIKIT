import * as React from 'react';
import type { SVGProps } from 'react';

const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1h5v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H12V9a3 3 0 0 0-3-3zm4.5 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKey;
