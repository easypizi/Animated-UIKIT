import * as React from 'react';
import type { SVGProps } from 'react';

const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M21.923 2.995a.786.786 0 0 0-.917-.905c-3.315.572-7.599 3.792-10.325 7.442a7.023 7.023 0 0 1 3.825 3.88c3.662-2.65 6.883-6.872 7.417-10.417M3 16a5 5 0 1 1 5 5H2.694a.5.5 0 0 1-.475-.658l.473-1.418A6 6 0 0 0 3 17.026z"
    />
  </svg>
);
export default SvgBrush;
