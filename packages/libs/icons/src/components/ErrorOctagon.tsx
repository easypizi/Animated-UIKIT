import * as React from 'react';
import type { SVGProps } from 'react';

const SvgErrorOctagon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 1.577a2 2 0 0 0-2 0L3.474 5.923a2 2 0 0 0-1 1.732v8.69a2 2 0 0 0 1 1.732L11 22.423a2 2 0 0 0 2 0l7.526-4.346a2 2 0 0 0 1-1.732v-8.69a2 2 0 0 0-1-1.732zM9.914 8.5A1 1 0 0 0 8.5 9.914L10.586 12 8.5 14.086A1 1 0 0 0 9.914 15.5L12 13.414l2.086 2.086a1 1 0 0 0 1.414-1.414L13.414 12 15.5 9.914A1 1 0 0 0 14.086 8.5L12 10.586z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgErrorOctagon;
