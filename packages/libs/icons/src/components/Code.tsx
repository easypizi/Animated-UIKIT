import * as React from 'react';
import type { SVGProps } from 'react';

const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M15.35 3.064a1 1 0 0 0-1.287.587l-6 16.014a1 1 0 0 0 .587 1.288c.114.044.905.22 1.287-.587l6-16.014a1 1 0 0 0-.587-1.288M21.708 11.3l-3.716-3.72a.399.399 0 0 0-.567 0l-.847.847a.4.4 0 0 0 0 .567l3.012 3.015-3.012 3.014a.4.4 0 0 0 0 .568l.847.847c.157.157.41.157.567 0l3.716-3.72c.39-.394.39-1.025 0-1.419M7.426 8.43l-.847-.846a.399.399 0 0 0-.567 0l-3.72 3.715c-.39.39-.39 1.025 0 1.415l3.716 3.72c.158.157.41.157.567 0l.847-.848a.4.4 0 0 0 0-.567L4.41 12.005 7.422 8.99a.394.394 0 0 0 .004-.56"
    />
  </svg>
);
export default SvgCode;