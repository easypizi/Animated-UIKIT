import * as React from 'react';
import type { SVGProps } from 'react';

const SvgScale = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M3 4.125A1.125 1.125 0 0 1 4.125 3h3.75a1.125 1.125 0 1 1 0 2.25H6.84l2.58 2.58a1.125 1.125 0 1 1-1.59 1.59L5.25 6.84v1.036a1.125 1.125 0 1 1-2.25 0zM19.874 21a1.125 1.125 0 0 0 1.125-1.125v-3.751a1.125 1.125 0 1 0-2.25 0v1.035l-2.58-2.58a1.125 1.125 0 0 0-1.59 1.59l2.58 2.581h-1.035a1.125 1.125 0 1 0 0 2.25zm.795-17.669c.212.21.33.495.33.795v3.75a1.125 1.125 0 1 1-2.25 0V6.841l-2.58 2.58a1.125 1.125 0 1 1-1.59-1.591l2.58-2.58h-1.035a1.125 1.125 0 1 1 0-2.25h3.75c.298 0 .584.119.795.33zM3 19.874a1.125 1.125 0 0 0 1.125 1.125h3.751a1.125 1.125 0 1 0 0-2.25H6.841l2.58-2.58a1.125 1.125 0 0 0-1.591-1.59l-2.58 2.58v-1.035a1.125 1.125 0 1 0-2.25 0z"
    />
  </svg>
);
export default SvgScale;
