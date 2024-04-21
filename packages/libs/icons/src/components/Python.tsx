import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPython = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#python__a)">
      <path
        fill="url(#python__b)"
        d="M11.986 2a13.55 13.55 0 0 0-2.268.194C7.71 2.549 7.345 3.29 7.345 4.66v1.808h4.746v.603H5.565c-1.38 0-2.588.829-2.965 2.406-.436 1.808-.455 2.936 0 4.823.337 1.405 1.143 2.406 2.522 2.406h1.631v-2.168c0-1.566 1.356-2.948 2.965-2.948h4.74c1.32 0 2.373-1.086 2.373-2.412V4.661c0-1.287-1.085-2.253-2.373-2.467A14.801 14.801 0 0 0 11.986 2M9.419 3.455a.9.9 0 0 1 .89.907c0 .498-.4.901-.89.901a.896.896 0 0 1-.89-.901.9.9 0 0 1 .89-.907"
      />
      <path
        fill="url(#python__c)"
        d="M17.423 7.072v2.107c0 1.634-1.386 3.01-2.965 3.01h-4.74c-1.299 0-2.373 1.11-2.373 2.41v4.52c0 1.286 1.118 2.042 2.373 2.411 1.502.442 2.943.521 4.74 0 1.195-.346 2.373-1.042 2.373-2.411v-1.81h-4.74v-.602h7.112c1.38 0 1.894-.962 2.373-2.406.496-1.486.475-2.916 0-4.823-.34-1.373-.992-2.406-2.373-2.406zm-2.666 11.444c.492 0 .89.403.89.901a.9.9 0 0 1-.89.907.9.9 0 0 1-.89-.907c0-.498.4-.901.89-.901"
      />
    </g>
    <defs>
      <linearGradient
        id="python__b"
        x1={2.265}
        x2={13.208}
        y1={2}
        y2={11.325}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5A9FD4" />
        <stop offset={1} stopColor="#306998" />
      </linearGradient>
      <linearGradient
        id="python__c"
        x1={14.643}
        x2={10.717}
        y1={19.265}
        y2={13.764}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD43B" />
        <stop offset={1} stopColor="#FFE873" />
      </linearGradient>
      <clipPath id="python__a">
        <path fill="#fff" d="M2 2h20v20H2z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPython;
