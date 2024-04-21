import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFolderFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#000"
      fillOpacity={0.25}
      d="M17 3H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
    />
    <path
      fill="#000"
      d="M2 9.214h16.444c1.245 0 1.867 0 2.343.234.418.205.758.533.97.936.243.459.243 1.059.243 2.259v4.928c0 1.2 0 1.8-.242 2.259a2.184 2.184 0 0 1-.971.936C20.31 21 19.689 21 18.444 21H5.556c-1.245 0-1.867 0-2.343-.234a2.184 2.184 0 0 1-.97-.936C2 19.371 2 18.771 2 17.571zm0 0c0-.998 0-1.498.169-1.89a2.14 2.14 0 0 1 .482-.696c.206-.2.451-.357.721-.465C3.78 6 4.298 6 5.333 6h2.604c.909 0 1.362 0 1.77.163.41.163.73.473 1.373 1.093l2.031 1.958z"
    />
  </svg>
);
export default SvgFolderFill;
