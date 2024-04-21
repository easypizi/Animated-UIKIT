import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20.995 6.964a1 1 0 0 0-1.41-1.418L8.977 16.09l-4.563-4.533a1 1 0 0 0-1.41 1.42l5.268 5.232a1 1 0 0 0 1.41 0z"
    />
  </svg>
);
export default SvgCheck;
