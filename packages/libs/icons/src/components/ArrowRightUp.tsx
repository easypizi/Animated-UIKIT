import * as React from 'react';
import type { SVGProps } from 'react';

const SvgArrowRightUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M8.115 6.636h7.836L4.93 17.657a1 1 0 1 0 1.413 1.414l11.021-11.02v7.835a1 1 0 1 0 2 0V5.636a1 1 0 0 0-1-1H8.115a1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgArrowRightUp;
