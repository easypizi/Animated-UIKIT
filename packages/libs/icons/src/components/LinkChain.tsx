import * as React from 'react';
import type { SVGProps } from 'react';

const SvgLinkChain = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M13.06 5.282a1 1 0 1 1-1.414-1.414L12 3.515A6 6 0 0 1 20.486 12l-2.475 2.475a6 6 0 0 1-8.485 0 1 1 0 0 1 1.414-1.414 4 4 0 0 0 5.657 0l2.474-2.475a4 4 0 0 0-5.656-5.657z"
    />
    <path
      fill="currentColor"
      d="m12.353 20.132-.354.353A6 6 0 1 1 3.515 12L5.99 9.525a6 6 0 0 1 8.486 0 1 1 0 1 1-1.415 1.414 4 4 0 0 0-5.657 0l-2.475 2.475a4 4 0 1 0 5.657 5.657l.354-.353a1 1 0 0 1 1.414 1.413"
    />
  </svg>
);
export default SvgLinkChain;
