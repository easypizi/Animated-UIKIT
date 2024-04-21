import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M11.002 20a1 1 0 0 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 1 0-2 0v7h-7a1 1 0 1 0 0 2h7z"
    />
  </svg>
);
export default SvgPlus;
