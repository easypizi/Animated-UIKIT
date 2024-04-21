import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { RadioButton, type RadioButtonProps } from '../../components';
import { splitFormControllerProps } from '../utils';
import type { BaseFormInputProps } from '../types';

export interface FormRadioButtonProps
  extends BaseFormInputProps,
    Omit<RadioButtonProps, 'onChange' | 'name'> {}

export const FormRadioButton: FC<FormRadioButtonProps> = (props) => {
  const [controllerProps, radioButtonProps] =
    splitFormControllerProps<RadioButtonProps>(props);

  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, ...rest } = field;
        return <RadioButton {...radioButtonProps} {...rest} error={error} />;
      }}
    />
  );
};
