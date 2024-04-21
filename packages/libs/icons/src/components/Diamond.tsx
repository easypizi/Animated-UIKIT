import * as React from 'react';
import type { SVGProps } from 'react';

const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M8.753 9.676 12 22l3.246-12.324zM9.203 4l-.736 2.445-.648 2.159H2.13L6.063 4zM15.207 8.604H8.79l.732-2.445L10.17 4h3.656zM21.87 8.604H16.18L14.799 4h3.14zM14.31 16.87l-1.241 4.715L22 9.675h-5.794zM7.794 9.676H2l8.93 11.903z"
    />
  </svg>
);
export default SvgDiamond;
