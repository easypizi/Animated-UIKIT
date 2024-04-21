import * as React from 'react';
import type { SVGProps } from 'react';

const SvgBinX = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.118l-.771 13.117A2 2 0 0 1 17.114 22H6.886a2 2 0 0 1-1.997-1.883L4.118 7H3a1 1 0 1 1 0-2h4zm2 2h6V3H9zm0 5.5a1 1 0 0 1 1.414 0L12 12.086l1.586-1.586A1 1 0 1 1 15 11.914L13.414 13.5 15 15.086a1 1 0 0 1-1.414 1.414L12 14.914 10.414 16.5A1 1 0 0 1 9 15.086l1.586-1.586L9 11.914A1 1 0 0 1 9 10.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBinX;
