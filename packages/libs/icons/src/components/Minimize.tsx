import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M21 10a1 1 0 0 0-1-1h-3.586L21 4.414A1 1 0 1 0 19.586 3L15 7.586V4a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1M3 14a1 1 0 0 0 1 1h3.586L3 19.586A1 1 0 1 0 4.414 21L9 16.414V20a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1"
    />
  </svg>
);
export default SvgMinimize;
