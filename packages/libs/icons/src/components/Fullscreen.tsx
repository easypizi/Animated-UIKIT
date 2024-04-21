import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M21 9a1 1 0 1 1-2 0V5h-4a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1zM5 15a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2H5zM19 15a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4zM4 10a1 1 0 0 0 1-1V5h4a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgFullscreen;
