import * as React from 'react';
import type { SVGProps } from 'react';

const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.005 19A7 7 0 1 1 18.33 9h-2.526a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V5a1 1 0 1 0-2 0v2.507a9 9 0 1 0 .615 7.691c.228-.6-.249-1.198-.89-1.198h-.07c-.442 0-.825.294-.996.702A7.002 7.002 0 0 1 12.004 19"
    />
  </svg>
);
export default SvgRefresh;
