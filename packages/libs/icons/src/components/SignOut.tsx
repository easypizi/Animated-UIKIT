import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSignOut = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 4a1 1 0 0 1-1 1H5v14h6a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1"
    />
    <path
      fill="currentColor"
      d="M15 15.586 17.586 13H9a1 1 0 1 1 0-2h8.586L15 8.414A1 1 0 0 1 16.414 7l4.293 4.293a1 1 0 0 1 0 1.414L16.414 17A1 1 0 0 1 15 15.586"
    />
  </svg>
);
export default SvgSignOut;
