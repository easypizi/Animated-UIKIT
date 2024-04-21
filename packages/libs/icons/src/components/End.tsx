import * as React from 'react';
import type { SVGProps } from 'react';

const SvgEnd = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m10.802 5.46 6.54 6.54-6.54 6.54a1 1 0 1 0 1.414 1.415l7.248-7.248a1 1 0 0 0 0-1.414l-7.248-7.248a1 1 0 1 0-1.414 1.414"
    />
    <path
      fill="currentColor"
      d="m3.802 5.46 6.54 6.54-6.54 6.54a1 1 0 1 0 1.414 1.415l7.248-7.248a1 1 0 0 0 0-1.414L5.216 4.045A1 1 0 1 0 3.802 5.46"
    />
  </svg>
);
export default SvgEnd;
