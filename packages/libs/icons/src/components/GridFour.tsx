import * as React from 'react';
import type { SVGProps } from 'react';

const SvgGridFour = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M9.5 3A1.5 1.5 0 0 1 11 4.5v5A1.5 1.5 0 0 1 9.5 11h-5A1.5 1.5 0 0 1 3 9.5v-5A1.5 1.5 0 0 1 4.5 3zM13 4.5A1.5 1.5 0 0 1 14.5 3h5A1.5 1.5 0 0 1 21 4.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 13 9.5zM21 14.5a1.5 1.5 0 0 0-1.5-1.5h-5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5zM11 19.5A1.5 1.5 0 0 1 9.5 21h-5A1.5 1.5 0 0 1 3 19.5v-5A1.5 1.5 0 0 1 4.5 13h5a1.5 1.5 0 0 1 1.5 1.5z"
    />
  </svg>
);
export default SvgGridFour;
