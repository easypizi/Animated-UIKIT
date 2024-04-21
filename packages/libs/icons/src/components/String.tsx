import * as React from 'react';
import type { SVGProps } from 'react';

const SvgString = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M1 4.8c0 .996.776 1.8 1.737 1.8h4.052v12.6c0 .996.776 1.8 1.737 1.8.961 0 1.737-.804 1.737-1.8V6.6h4.053c.96 0 1.737-.804 1.737-1.8S15.277 3 14.316 3H2.736C1.777 3 1 3.804 1 4.8M21.263 9h-6.947c-.961 0-1.737.804-1.737 1.8s.776 1.8 1.737 1.8h1.737v6.6c0 .996.775 1.8 1.736 1.8s1.737-.804 1.737-1.8v-6.6h1.737c.961 0 1.737-.804 1.737-1.8S22.224 9 21.263 9"
    />
  </svg>
);
export default SvgString;
