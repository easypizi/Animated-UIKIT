/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BaseFormInputProps } from '../types';

export const splitFormControllerProps = <T = Record<string, any>>(
  props: BaseFormInputProps & T,
): [BaseFormInputProps, T] => {
  const { name, control, defaultValue, rules, shouldUnregister, ...rest } =
    props;

  return [
    {
      name,
      control,
      defaultValue,
      rules,
      shouldUnregister,
    },
    rest as T,
  ];
};
