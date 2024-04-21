import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSave = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M3 5a2 2 0 0 1 2-2h1v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.18c.216.098.415.235.586.406l3.828 3.828A2 2 0 0 1 21 8.828V19a2 2 0 0 1-2 2h-1v-5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5H5a2 2 0 0 1-2-2z"
    />
    <path fill="currentColor" d="M8 7h6V3H8zM16 21v-5H8v5z" />
  </svg>
);
export default SvgSave;
