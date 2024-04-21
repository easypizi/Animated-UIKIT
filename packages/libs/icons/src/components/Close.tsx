import * as React from 'react';
import type { SVGProps } from 'react';

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M17.659 4.929a1 1 0 1 1 1.414 1.414L13.416 12l5.657 5.657a1 1 0 0 1-1.415 1.414l-5.656-5.657-5.657 5.657a1 1 0 0 1-1.414-1.414L10.587 12 4.931 6.343A1 1 0 1 1 6.345 4.93l5.657 5.657z"
    />
  </svg>
);
export default SvgClose;
