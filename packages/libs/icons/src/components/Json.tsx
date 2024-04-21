import * as React from 'react';
import type { SVGProps } from 'react';

const SvgJson = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g fillRule="evenodd" clipPath="url(#json__a)" clipRule="evenodd">
      <path
        fill="url(#json__b)"
        d="M11.983 16.888c4.425 6.031 8.755-1.684 8.749-6.324-.008-5.486-5.568-8.552-8.752-8.552C6.868 2.012 2 6.237 2 12.017 2 18.442 7.58 22 11.98 22c-.996-.143-4.314-.854-4.358-8.496-.03-5.168 1.686-7.233 4.35-6.325.06.022 2.94 1.158 2.94 4.87 0 3.694-2.929 4.839-2.929 4.839"
      />
      <path
        fill="url(#json__c)"
        d="M11.978 7.175c-2.924-1.008-6.505 1.402-6.505 6.229 0 7.88 5.84 8.596 6.548 8.596C17.132 22 22 17.776 22 11.996c0-6.425-5.58-9.984-9.98-9.984 1.219-.168 6.568 1.32 6.568 8.63 0 4.768-3.994 7.363-6.592 6.254-.06-.022-2.939-1.158-2.939-4.869 0-3.695 2.92-4.852 2.92-4.852"
      />
    </g>
    <defs>
      <linearGradient
        id="json__b"
        x1={4.958}
        x2={19.046}
        y1={4.958}
        y2={19.05}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="json__c"
        x1={19.048}
        x2={4.96}
        y1={19.048}
        y2={4.957}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <clipPath id="json__a">
        <path fill="#fff" d="M2 2h20v20H2z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJson;
