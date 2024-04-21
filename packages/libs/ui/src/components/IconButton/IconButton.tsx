import { forwardRef, type MouseEventHandler, type ReactNode } from 'react';
import type { FCWithAs } from '../../types';
import type { IconButtonBaseProps } from './types';
import { Loader } from '../Loader';
import {
  ContainedButton,
  Content,
  Label,
  LoaderWrapper,
  Shape,
} from './styled';

export interface IconButtonProps extends IconButtonBaseProps {
  children?: ReactNode;
  label?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: FCWithAs<'button', IconButtonProps> = forwardRef(
  (
    {
      as,
      size = 'sm',
      color = 'primary',
      disabled = false,
      loading = false,
      label,
      labelPosition = 'right',
      children,
      onClick,
      ...rest
    },
    ref,
  ) => {
    return (
      <ContainedButton
        as={as}
        size={size}
        color={color}
        disabled={disabled}
        loading={loading}
        labelPosition={labelPosition}
        onClick={disabled ? undefined : onClick}
        ref={ref}
        {...rest}
      >
        <Shape>
          <Content>{children}</Content>
          {loading && (
            <LoaderWrapper>
              <Loader color="inherit" />
            </LoaderWrapper>
          )}
        </Shape>
        {label && <Label>{label}</Label>}
      </ContainedButton>
    );
  },
  // #TODO fix typings end remove next line
) as FCWithAs<'button', IconButtonProps>;
