import * as React from 'react';
import type { SVGProps } from 'react';

const SvgRequest = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M22 16.5a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1M21 22a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2z"
    />
  </svg>
);
export default SvgRequest;
