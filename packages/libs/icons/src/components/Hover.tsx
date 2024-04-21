import * as React from 'react';
import type { SVGProps } from 'react';

const SvgHover = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M8.007 3a2 2 0 1 1 4 0v5.002l7.299 1.504a3 3 0 0 1 2.394 2.938V13h.007c0 4.97-4.186 9-9.35 9-3.67 0-6.848-2.037-8.378-5a8.91 8.91 0 0 1-.089-.177l-2.127-4.249a1.322 1.322 0 0 1-.107-.887c.357-1.558 2.317-2.075 3.396-.895l1.825 1.996a.65.65 0 0 0 1.13-.438z"
    />
  </svg>
);
export default SvgHover;
