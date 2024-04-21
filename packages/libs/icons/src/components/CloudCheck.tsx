import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCloudCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 20a5 5 0 0 1-.99-9.902 7.5 7.5 0 0 1 14.573-2.07A6 6 0 0 1 18 20zm10-10a1 1 0 0 1 0 1.414l-3.793 3.793a1 1 0 0 1-1.414 0L8 13.414A1 1 0 1 1 9.414 12l1.086 1.086L13.586 10A1 1 0 0 1 15 10"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloudCheck;
