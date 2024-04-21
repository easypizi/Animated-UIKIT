import type { FC } from 'react';
import { Controller } from 'react-hook-form';
import type { BaseFormInputProps } from '../types';
import { NumberInput, type NumberInputProps } from '../../components';
import { splitFormControllerProps } from '../utils';

export interface FormNumberInputProps
  extends BaseFormInputProps,
    Omit<
      NumberInputProps,
      'onChange' | 'onFocus' | 'onBlur' | 'defaultValue' | 'name'
    > {}

export const FormNumberInput: FC<FormNumberInputProps> = (props) => {
  const [controllerProps, inputProps] =
    splitFormControllerProps<NumberInputProps>(props);
  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, ...rest } = field;
        return <NumberInput {...inputProps} {...rest} error={error} />;
      }}
    />
  );
};
