import * as React from 'react';
import type { SVGProps } from 'react';

const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9.448-4.868a.5.5 0 0 1 .5.514l-.158 5.375a.5.5 0 0 1-.5.486h-.784a.5.5 0 0 1-.5-.486l-.161-5.374a.5.5 0 0 1 .5-.515zm-.55 9.943a1.12 1.12 0 0 1-.815-.336 1.095 1.095 0 0 1-.335-.815 1.074 1.074 0 0 1 .335-.805 1.12 1.12 0 0 1 .815-.336c.304 0 .57.112.801.336a1.1 1.1 0 0 1 .182 1.385 1.24 1.24 0 0 1-.417.417 1.09 1.09 0 0 1-.566.154"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlert;
