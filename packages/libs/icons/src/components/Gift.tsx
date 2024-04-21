import * as React from 'react';
import type { SVGProps } from 'react';

const SvgGift = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 4.065C11.302 2.965 10.186 2 8.5 2a3.5 3.5 0 1 0 0 7H4a2 2 0 1 0 0 4h7V9h2v4h7a2 2 0 1 0 0-4h-4.5a3.5 3.5 0 1 0 0-7c-1.686 0-2.802.965-3.5 2.065M7 5.5A1.5 1.5 0 0 0 8.5 7H11v-.005c-.005-.038-.029-.263-.137-.627a5.05 5.05 0 0 0-.527-1.19C9.865 4.412 9.292 4 8.5 4A1.5 1.5 0 0 0 7 5.5M15.5 7a1.5 1.5 0 0 0 0-3c-.792 0-1.364.413-1.836 1.177-.239.385-.414.811-.527 1.191-.108.364-.132.588-.136.627V7z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6 22a2 2 0 0 1-2-2v-5h7v7zM20 20a2 2 0 0 1-2 2h-5v-7h7z"
    />
  </svg>
);
export default SvgGift;
