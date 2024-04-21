import {
  Children,
  type FC,
  type ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import { Content, StyledSnackBarContainer } from './styled';
import type { SnackbarAnchorOrigin, SnackbarAnimation } from './types';

export interface SnackbarProps {
  anchorOrigin?: SnackbarAnchorOrigin;
  animation?: SnackbarAnimation;
  children?: ReactNode;
}

export const Snackbar: FC<SnackbarProps> = ({
  anchorOrigin = 'bottom-center',
  animation = 'fade',
  children,
}) => {
  const content = Children.map(children, (item) => {
    if (isValidElement(item)) {
      return cloneElement(item, { animation } as never);
    }
    return item;
  });

  return (
    <StyledSnackBarContainer anchorOrigin={anchorOrigin}>
      <Content>{content}</Content>
    </StyledSnackBarContainer>
  );
};
