import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTextIncrease = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.783 2H2v2.609h6.087V22h2.609V4.609h6.087zm2.608 8.696V8.087h-1.739v2.609h-2.609v1.739h2.61v2.608h1.738v-2.608H22v-1.74z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTextIncrease;
