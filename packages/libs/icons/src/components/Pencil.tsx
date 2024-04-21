import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.336 3.664 14.86 5.14l4 4 1.475-1.475a2 2 0 0 0 0-2.828l-1.172-1.172a2 2 0 0 0-2.828 0M7.293 20.707l10.154-10.154-4-4L3.293 16.707a1 1 0 0 0-.293.707V20.5a.5.5 0 0 0 .5.5h3.086a1 1 0 0 0 .707-.293"
    />
  </svg>
);
export default SvgPencil;
