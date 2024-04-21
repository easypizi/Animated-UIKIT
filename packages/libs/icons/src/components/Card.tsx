import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCard = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v2h20V6a2 2 0 0 0-2-2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 20a2 2 0 0 0 2-2v-8H2v8a2 2 0 0 0 2 2zM8 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCard;
