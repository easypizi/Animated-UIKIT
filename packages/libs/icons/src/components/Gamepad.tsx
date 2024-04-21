import * as React from 'react';
import type { SVGProps } from 'react';

const SvgGamepad = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.597 3a6 6 0 0 0-5.981 5.53L1.5 10l-.672 7.39a3.31 3.31 0 0 0 6.137 2.003L9 16h6l2.036 3.393a3.311 3.311 0 0 0 6.136-2.004L22.5 10l-.115-1.47A6 6 0 0 0 16.403 3zM8 12a.875.875 0 0 1-.875-.875v-.75h-.75a.875.875 0 1 1 0-1.75h.75v-.75a.875.875 0 1 1 1.75 0v.75h.75a.875.875 0 1 1 0 1.75h-.75v.75A.875.875 0 0 1 8 12m5.5-2.5c0-.483.392-.875.875-.875h3.25a.875.875 0 1 1 0 1.75h-3.25A.875.875 0 0 1 13.5 9.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGamepad;
