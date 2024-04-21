import { forwardRef, type MouseEventHandler, type ReactNode } from 'react';
import {
  ContainedButton,
  Content,
  IconHolder,
  LoaderWrapper,
  TextButton,
} from './styled';
import type { FCWithAs } from '../../types';
import type { ButtonBaseProps, ButtonVariant } from './types';
import { Loader } from '../Loader';

export interface ButtonProps extends ButtonBaseProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FCWithAs<'button', ButtonProps> = forwardRef(
  (
    {
      as,
      variant = 'contained',
      size = 'sm',
      color = 'primary',
      disabled = false,
      loading = false,
      fullWidth = false,
      startIcon = null,
      endIcon = null,
      children,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const Component = variant === 'contained' ? ContainedButton : TextButton;
    return (
      <Component
        as={as}
        size={size}
        color={color}
        disabled={disabled}
        loading={loading}
        fullWidth={fullWidth}
        onClick={disabled ? undefined : onClick}
        ref={ref}
        {...rest}
      >
        <Content>
          {startIcon && <IconHolder>{startIcon}</IconHolder>}
          {children}
          {endIcon && <IconHolder>{endIcon}</IconHolder>}
        </Content>
        {loading && (
          <LoaderWrapper>
            <Loader color="inherit" />
          </LoaderWrapper>
        )}
      </Component>
    );
  },
  // #TODO fix typings end remove next line
) as FCWithAs<'button', ButtonProps>;
