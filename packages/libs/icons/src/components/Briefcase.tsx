import * as React from 'react';
import type { SVGProps } from 'react';

const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 5V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h3a2 2 0 0 1 2 2v1.5l-3.66 1.373a2 2 0 0 1-.703.127H6.363a2 2 0 0 1-.703-.127L2 8.5V7a2 2 0 0 1 2-2zm2-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m22 10.636-2.958 1.11a4 4 0 0 1-1.405.254H17v1a1 1 0 1 1-2 0v-1H9v1a1 1 0 1 1-2 0v-1h-.637a4 4 0 0 1-1.405-.255L2 10.636V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"
    />
  </svg>
);
export default SvgBriefcase;
