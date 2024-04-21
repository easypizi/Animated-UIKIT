import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M2 7a2 2 0 0 1 2-2h2V3.75a1 1 0 1 1 2 0V5h8V3.75a1 1 0 1 1 2 0V5h2a2 2 0 0 1 2 2v2H2zM4 21a2 2 0 0 1-2-2v-8h20v8a2 2 0 0 1-2 2z"
    />
  </svg>
);
export default SvgCalendar;
