import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 17 17" {...props}>
    <g clipPath="url(#timer__a)">
      <path
        fill="#242526"
        fillRule="evenodd"
        d="M10.948 1.899c.117-.349-.07-.73-.427-.82A8.353 8.353 0 0 0 8.5.834c-.695 0-1.37.085-2.015.246-.358.088-.545.47-.428.818.118.35.495.534.854.45.3-.069.608-.12.922-.15v1.006a6 6 0 1 0 5.355 2.218l.616-.615a.667.667 0 0 0-.943-.943l-.616.616a5.971 5.971 0 0 0-3.078-1.276V2.198c.315.03.625.08.927.15.358.084.736-.1.854-.449M7.833 9.167a.667.667 0 1 0 1.334 0V6.833a.667.667 0 0 0-1.334 0z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="timer__a">
        <path fill="#fff" d="M.5.5h16v16H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTimer;
