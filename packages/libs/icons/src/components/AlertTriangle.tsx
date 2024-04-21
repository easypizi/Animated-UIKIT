import * as React from 'react';
import type { SVGProps } from 'react';

const SvgAlertTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.299 3.25a1.5 1.5 0 0 0-2.598 0l-8.949 15.5a1.5 1.5 0 0 0 1.3 2.25h17.897a1.5 1.5 0 0 0 1.299-2.25zm-.754 6.382a.5.5 0 0 1 .5.521l-.145 3.375a.5.5 0 0 1-.5.479h-.796a.5.5 0 0 1-.5-.479l-.148-3.374a.5.5 0 0 1 .5-.522zm-.543 7.943a1.12 1.12 0 0 1-.815-.336 1.095 1.095 0 0 1-.335-.815 1.074 1.074 0 0 1 .335-.805 1.12 1.12 0 0 1 .815-.336c.304 0 .57.112.801.336a1.1 1.1 0 0 1 .182 1.385 1.24 1.24 0 0 1-.417.417 1.09 1.09 0 0 1-.566.154"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlertTriangle;
