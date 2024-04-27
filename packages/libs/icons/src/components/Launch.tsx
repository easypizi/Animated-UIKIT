import * as React from 'react';
import type { SVGProps } from 'react';

const SvgLaunch = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M21.895 2.271a.213.213 0 0 0-.159-.163c-2.614-.64-8.656 1.64-11.93 4.915-.583.58-1.115 1.21-1.59 1.881-1.01-.09-2.019-.014-2.879.36-2.427 1.07-3.134 3.86-3.33 5.06a.431.431 0 0 0 .47.5l3.898-.43c.003.295.02.588.053.88.02.204.11.394.255.537l1.509 1.507a.875.875 0 0 0 .536.255c.29.032.582.05.874.053l-.427 3.897a.431.431 0 0 0 .5.471c1.196-.192 3.989-.9 5.05-3.329.376-.861.453-1.866.366-2.872a14.182 14.182 0 0 0 1.885-1.592c3.283-3.27 5.548-9.182 4.919-11.93M13.7 10.3A2.145 2.145 0 0 1 16.405 7a2.144 2.144 0 0 1 .324 3.3 2.142 2.142 0 0 1-3.03 0"
    />
    <path
      fill="currentColor"
      d="M8.09 18.41c-.245.245-.638.34-1.11.423-1.061.18-1.998-.737-1.808-1.811.073-.407.288-.978.422-1.112a.196.196 0 0 0-.163-.333 2.677 2.677 0 0 0-1.568.765c-1.05 1.052-1.149 4.953-1.149 4.953s3.9-.1 4.95-1.15c.424-.423.693-.977.765-1.572.016-.186-.211-.298-.34-.163"
    />
  </svg>
);
export default SvgLaunch;