import * as React from 'react';
import type { SVGProps } from 'react';

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M22.293 11.293a1 1 0 0 1 0 1.414l-7.585 7.586c-.63.63-1.708.184-1.708-.707V16c-4.16 0-7.264.802-9.786 2.66-.868.64-2.378-.137-2.026-1.155C2.882 12.609 6.126 8 13 8V4.414c0-.89 1.078-1.337 1.707-.707z"
    />
  </svg>
);
export default SvgShare;
