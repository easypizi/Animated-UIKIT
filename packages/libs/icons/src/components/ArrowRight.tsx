import * as React from 'react';
import type { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m13.045 5.46 5.54 5.54H3a1 1 0 0 0 0 2h15.586l-5.541 5.54a1 1 0 0 0 1.414 1.415l7.248-7.248a1 1 0 0 0 0-1.414l-7.248-7.248a.997.997 0 0 0-1.414 0 1 1 0 0 0 0 1.414"
    />
  </svg>
);
export default SvgArrowRight;
