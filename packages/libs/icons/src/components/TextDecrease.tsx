import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTextDecrease = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.783 2H2v2.609h6.087V22h2.609V4.609h6.087z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.27 10.662v1.932H22v-1.932z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTextDecrease;
