import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { RadioGroup, type RadioGroupProps } from '../../components';
import { splitFormControllerProps } from '../utils';
import type { BaseFormInputProps } from '../types';

export interface FormRadioGroupProps
  extends BaseFormInputProps,
    Omit<RadioGroupProps, 'onChange' | 'name'> {}

export const FormRadioGroup: FC<FormRadioGroupProps> = (props) => {
  const [controllerProps, radioGroupProps] =
    splitFormControllerProps<RadioGroupProps>(props);

  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, ...rest } = field;
        return <RadioGroup {...radioGroupProps} {...rest} error={error} />;
      }}
    />
  );
};
