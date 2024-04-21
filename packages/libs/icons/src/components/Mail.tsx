import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M11 13.507 2 8.311V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.31l-9 5.197a2 2 0 0 1-2 0"
    />
    <path
      fill="currentColor"
      d="M12 11.775 2 6.002V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.002z"
    />
  </svg>
);
export default SvgMail;
