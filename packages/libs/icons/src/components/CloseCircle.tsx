import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCloseCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.002 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10M9.916 8.5a1 1 0 0 0-1.414 1.414L10.588 12l-2.086 2.086A1 1 0 1 0 9.916 15.5l2.086-2.086 2.086 2.086a1 1 0 0 0 1.414-1.414L13.416 12l2.086-2.086A1 1 0 0 0 14.088 8.5l-2.086 2.086z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseCircle;
