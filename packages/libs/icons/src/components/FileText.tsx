import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFileText = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.667 6.524c0-.442-.176-.866-.489-1.179l-3.19-3.19a1.667 1.667 0 0 0-1.178-.488H5c-.92 0-1.667.746-1.667 1.666v13.334c0 .92.747 1.666 1.667 1.666h10c.92 0 1.667-.746 1.667-1.666zm-3.75 2.643a.833.833 0 1 0 0-1.667H7.083a.833.833 0 0 0 0 1.667zm-5.834 3.75a.833.833 0 0 1 0-1.667h4.167a.833.833 0 1 1 0 1.666z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFileText;
