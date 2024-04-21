import * as React from 'react';
import type { SVGProps } from 'react';

const SvgRuble = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M8.857 2.667H5.143V8H4v1.185h1.143v1.185H4v1.186h1.143v1.777h1.143v-1.777H8.57V10.37H6.286V9.185h2.571c1.737 0 3.143-1.458 3.143-3.26 0-1.8-1.406-3.258-3.143-3.258m0 5.333H6.286V3.852h2.571c1.103 0 2 .93 2 2.074 0 1.144-.897 2.074-2 2.074"
    />
  </svg>
);
export default SvgRuble;
