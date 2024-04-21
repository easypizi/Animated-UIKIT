/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BaseInputProps } from './BaseInput';

export const splitBaseInputProps = <T = Record<string, any>>(
  props: BaseInputProps & T,
): [BaseInputProps, T] => {
  const {
    fullWidth,
    label,
    required,
    focused,
    allowClear,
    allowAction,
    actionContained,
    error,
    success,
    empty,
    disabled,
    startIcon,
    endIcon,
    children,
    onClear,
    onAction,
    actionIcon,
    className,
    ...rest
  } = props;

  return [
    {
      fullWidth,
      label,
      required,
      focused,
      allowClear,
      allowAction,
      actionContained,
      error,
      success,
      empty,
      disabled,
      startIcon,
      endIcon,
      children,
      className,
      onClear,
      onAction,
      actionIcon,
    },
    rest as T,
  ];
};
