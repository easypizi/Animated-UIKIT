import * as React from 'react';
import type { SVGProps } from 'react';

const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.96 4.597A2 2 0 0 0 19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5c0-.138-.014-.273-.04-.403m-4.253 6.11L19 13v6H5v-4.722l1.348-1.198a1 1 0 0 1 1.315-.012l2.134 1.83a1 1 0 0 0 1.358-.053l4.138-4.138a1 1 0 0 1 1.414 0M12 8.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgImage;
