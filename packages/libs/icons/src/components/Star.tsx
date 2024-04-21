import * as React from 'react';
import type { SVGProps } from 'react';

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.924 2.47c-.342-.821-1.505-.821-1.847 0l-2.41 5.793-6.253.501c-.887.071-1.246 1.178-.571 1.757l4.765 4.081-1.456 6.103c-.206.865.735 1.549 1.494 1.085L12 18.52l5.355 3.27c.759.464 1.7-.22 1.494-1.085l-1.456-6.103 4.765-4.081c.675-.58.316-1.686-.57-1.757l-6.255-.501z"
    />
  </svg>
);
export default SvgStar;
