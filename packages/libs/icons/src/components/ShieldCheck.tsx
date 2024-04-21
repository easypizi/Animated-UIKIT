import * as React from 'react';
import type { SVGProps } from 'react';

const SvgShieldCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6.3a2 2 0 0 1 1.188-1.828l7-3.111a2 2 0 0 1 1.624 0l7 3.111A2 2 0 0 1 21 6.3V13c0 5.877-6.343 8.934-8.379 9.764-.4.163-.841.163-1.242 0C9.343 21.934 3 18.877 3 13zm13.5 2.2a1 1 0 0 1 0 1.414l-4.793 4.793a1 1 0 0 1-1.414 0L8 12.414A1 1 0 1 1 9.414 11L11 12.586 15.086 8.5a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShieldCheck;
