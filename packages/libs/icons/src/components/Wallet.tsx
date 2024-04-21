import * as React from 'react';
import type { SVGProps } from 'react';

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 3a3 3 0 0 0-3 3v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2V5a2 2 0 0 0-2-2zM4 6a1 1 0 0 1 1-1h13v2H5a1 1 0 0 1-1-1m13.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWallet;
