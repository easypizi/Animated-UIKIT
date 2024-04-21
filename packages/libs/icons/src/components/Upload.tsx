import * as React from 'react';
import type { SVGProps } from 'react';

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m15.59 8-2.585-2.586V15a1 1 0 1 1-2 0V5.414L8.419 8a1 1 0 0 1-1.414-1.414l4.293-4.293a1 1 0 0 1 1.414 0l4.293 4.293A1 1 0 0 1 15.591 8"
    />
    <path
      fill="currentColor"
      d="M4.005 14a1 1 0 0 1 1 1v4h14v-4a1 1 0 1 1 2 0v4a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-4a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgUpload;
