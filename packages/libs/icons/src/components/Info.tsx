import * as React from 'react';
import type { SVGProps } from 'react';

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.524 4.95a.5.5 0 0 1-.5-.5v-5.864a.5.5 0 0 1 .5-.5h1.042a.5.5 0 0 1 .5.5v5.864a.5.5 0 0 1-.5.5zm.526-8.313c-.304 0-.564-.1-.782-.302a.979.979 0 0 1-.32-.733c0-.282.106-.523.32-.724a1.1 1.1 0 0 1 .782-.307c.303 0 .562.102.776.307a.953.953 0 0 1 .326.724.972.972 0 0 1-.326.733 1.093 1.093 0 0 1-.776.302"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfo;
