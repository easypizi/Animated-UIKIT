import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20 7.828a2 2 0 0 0-.586-1.414l-3.828-3.828A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"
    />
  </svg>
);
export default SvgFile;
