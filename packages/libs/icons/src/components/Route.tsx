import * as React from 'react';
import type { SVGProps } from 'react';

const SvgRoute = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M13.5 7.098a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196M9.402 21a3 3 0 1 0 5.196-3 3 3 0 0 0-5.196 3"
    />
    <path
      fill="currentColor"
      d="M4.851 9.776A1.921 1.921 0 0 0 6.56 13.21l10.104-4.263a3.921 3.921 0 0 1 3.485 7.009l-2.45 1.414a1 1 0 0 1-1-1.732l2.45-1.414a1.921 1.921 0 0 0-1.707-3.434L7.336 15.053a3.921 3.921 0 0 1-3.485-7.009l2.45-1.414a1 1 0 1 1 1 1.732z"
    />
  </svg>
);
export default SvgRoute;
