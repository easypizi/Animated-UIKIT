import * as React from 'react';
import type { SVGProps } from 'react';

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19.582 16.479c.282.328.418.754.418 1.188V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.333c0-.434.136-.86.418-1.188A9.977 9.977 0 0 1 12 13a9.977 9.977 0 0 1 7.581 3.479"
    />
  </svg>
);
export default SvgUser;
