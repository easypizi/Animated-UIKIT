import styled, { type CSSObject, css } from 'styled-components';
import type { SnackbarAnchorOrigin } from './types';

export const Content = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.get(2)};
    pointer-events: all;

    ${theme.breakpoints.up('sm')} {
      width: 400px;
    }
  `,
);

interface ContainerProps {
  anchorOrigin: SnackbarAnchorOrigin;
}

export const StyledSnackBarContainer = styled.div<ContainerProps>(
  ({ theme, anchorOrigin }) => css`
    position: fixed;
    inset: ${theme.spacing.get(5, 4)};
    z-index: 2000;
    display: flex;
    flex-direction: column;
    pointer-events: none;

    ${() => {
      const styles: CSSObject = {};

      if (['top-left', 'top-right', 'top-center'].includes(anchorOrigin)) {
        styles.justifyContent = 'flex-start';
      } else if (
        ['bottom-left', 'bottom-right', 'bottom-center'].includes(anchorOrigin)
      ) {
        styles.justifyContent = 'flex-end';
        styles[Content] = {
          flexDirection: 'column-reverse',
        };
      }

      if (['top-left', 'bottom-left'].includes(anchorOrigin)) {
        styles.alignItems = 'flex-start';
      } else if (['top-right', 'bottom-right'].includes(anchorOrigin)) {
        styles.alignItems = 'flex-end';
      } else if (['top-center', 'bottom-center'].includes(anchorOrigin)) {
        styles.alignItems = 'center';
      }

      return styles;
    }}
  `,
);
