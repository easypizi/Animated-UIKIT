import styled, { css } from 'styled-components';

export interface PaperProps {
  shadow?: boolean;
  // TODO: props for radius
  // TODO: props for colors
}

export const Paper = styled.div<PaperProps>(
  ({ theme, shadow }) => css`
    border-radius: 20px;
    background: ${theme.palette.neutral100};
    ${shadow &&
    css`
      box-shadow:
        0px 18px 80px rgba(0, 0, 0, 0.07),
        0px 2.25388px 10.0172px rgba(0, 0, 0, 0.035);
    `}
  `,
);
