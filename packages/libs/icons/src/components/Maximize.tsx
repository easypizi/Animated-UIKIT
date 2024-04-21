import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M14 3a1 1 0 0 0 1 1h3.586L14 8.586A1 1 0 0 0 15.414 10L20 5.414V9a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1M10 21a1 1 0 0 0-1-1H5.414L10 15.414A1 1 0 0 0 8.586 14L4 18.586V15a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1"
    />
  </svg>
);
export default SvgMaximize;
