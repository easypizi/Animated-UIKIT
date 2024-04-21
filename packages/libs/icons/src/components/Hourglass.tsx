import * as React from 'react';
import type { SVGProps } from 'react';

const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M17 2a2 2 0 0 1 2 2v1.343a4 4 0 0 1-1.172 2.829L14 12l3.828 3.828A4 4 0 0 1 19 18.657V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1.343a4 4 0 0 1 1.172-2.829L10 12 6.172 8.172A4 4 0 0 1 5 5.343V4a2 2 0 0 1 2-2z"
    />
  </svg>
);
export default SvgHourglass;
