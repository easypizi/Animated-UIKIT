import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSignIn = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 20a1 1 0 0 1 1-1h6V5h-6a1 1 0 0 1 0-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1"
    />
    <path
      fill="currentColor"
      d="M9 8.414 11.586 11H3a1 1 0 1 0 0 2h8.586L9 15.586A1 1 0 1 0 10.414 17l4.293-4.293a1 1 0 0 0 0-1.414L10.414 7A1 1 0 1 0 9 8.414"
    />
  </svg>
);
export default SvgSignIn;
