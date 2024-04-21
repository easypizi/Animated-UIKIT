import * as React from 'react';
import type { SVGProps } from 'react';

const SvgDragVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M8.5 3.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M6.75 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M6.75 19a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M13.75 5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M13.75 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M13.75 19a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
    />
  </svg>
);
export default SvgDragVertical;
