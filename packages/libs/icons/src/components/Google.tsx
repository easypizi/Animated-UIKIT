import * as React from 'react';
import type { SVGProps } from 'react';

const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#4285F4"
      fillRule="evenodd"
      d="M23.04 12.288c0-.816-.073-1.6-.21-2.353H12v4.449h6.19a5.29 5.29 0 0 1-2.296 3.47v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.452"
      clipRule="evenodd"
    />
    <path
      fill="#34A853"
      fillRule="evenodd"
      d="M12 23.526c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.723v2.98A11.496 11.496 0 0 0 12 23.526"
      clipRule="evenodd"
    />
    <path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M5.565 14.211a6.913 6.913 0 0 1-.36-2.185c0-.758.13-1.495.36-2.185v-2.98H1.723A11.495 11.495 0 0 0 .5 12.027c0 1.856.444 3.612 1.223 5.165z"
      clipRule="evenodd"
    />
    <path
      fill="#EA4335"
      fillRule="evenodd"
      d="M12 5.1c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.703 1.666 15.1.526 12 .526A11.496 11.496 0 0 0 1.723 6.862l3.842 2.98C6.47 7.121 9.005 5.1 12 5.1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGoogle;
