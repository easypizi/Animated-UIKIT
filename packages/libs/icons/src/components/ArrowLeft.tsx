import * as React from 'react';
import type { SVGProps } from 'react';

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M10.955 18.54 5.415 13H21a1 1 0 1 0 0-2H5.414l5.54-5.54a1 1 0 0 0-1.413-1.415l-7.248 7.248a1 1 0 0 0 0 1.414l7.248 7.248a1 1 0 0 0 1.414-1.414"
    />
  </svg>
);
export default SvgArrowLeft;
