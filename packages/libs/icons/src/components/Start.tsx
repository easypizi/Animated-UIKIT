import * as React from 'react';
import type { SVGProps } from 'react';

const SvgStart = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.464 5.46 5.923 12l6.54 6.54a1 1 0 1 1-1.413 1.415l-7.248-7.248a1 1 0 0 1 0-1.414l7.248-7.248a1 1 0 1 1 1.414 1.414"
    />
    <path
      fill="currentColor"
      d="M19.464 5.46 12.923 12l6.54 6.54a1 1 0 1 1-1.414 1.415l-7.247-7.248a1 1 0 0 1 0-1.414l7.247-7.248a1 1 0 1 1 1.415 1.414"
    />
  </svg>
);
export default SvgStart;
