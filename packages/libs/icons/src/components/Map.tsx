import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.889 4.875 9.11 3.125a2 2 0 0 0-.837-.07l-6.403.832A1 1 0 0 0 1 4.879v13.983a1 1 0 0 0 1.129.991l6.145-.798a2 2 0 0 1 .837.07l5.778 1.75c.27.082.556.106.837.07l6.403-.832a1 1 0 0 0 .871-.991V5.138a1 1 0 0 0-1.129-.991l-6.145.798a2 2 0 0 1-.837-.07m-6.189.25 6.6 1.988v11.762l-6.6-1.988z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMap;
