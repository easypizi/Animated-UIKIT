import * as React from 'react';
import type { SVGProps } from 'react';

const SvgExpression = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 6a1 1 0 0 0-1 1v4a1 1 0 0 1-.293.707L4.414 12l.293.293A1 1 0 0 1 5 13v4a1 1 0 0 0 1 1 1 1 0 1 1 0 2 3 3 0 0 1-3-3v-3.586l-.707-.707a1 1 0 0 1 0-1.414L3 10.586V7a3 3 0 0 1 3-3 1 1 0 0 1 0 2m11-1a1 1 0 0 1 1-1 3 3 0 0 1 3 3v3.586l.707.707a1 1 0 0 1 0 1.414l-.707.707V17a3 3 0 0 1-3 3 1 1 0 1 1 0-2 1 1 0 0 0 1-1v-4a1 1 0 0 1 .293-.707l.293-.293-.293-.293A1 1 0 0 1 19 11V7a1 1 0 0 0-1-1 1 1 0 0 1-1-1m-5 3a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpression;
