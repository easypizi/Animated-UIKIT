import * as React from 'react';
import type { SVGProps } from 'react';

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m15.59 10-2.585 2.586V3a1 1 0 0 0-2 0v9.586L8.419 10a1 1 0 0 0-1.414 1.414l4.293 4.293a1 1 0 0 0 1.414 0l4.293-4.292A1 1 0 0 0 15.591 10"
    />
    <path
      fill="currentColor"
      d="M4.005 14a1 1 0 0 1 1 1v4h14v-4a1 1 0 1 1 2 0v4a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-4a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgDownload;
