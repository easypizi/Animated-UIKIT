import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M4 13a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z" />
  </svg>
);
export default SvgMinus;
