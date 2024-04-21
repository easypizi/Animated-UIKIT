import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Select, type SelectProps } from '../../components';
import { splitFormControllerProps } from '../utils';
import type { BaseFormInputProps } from '../types';

export interface FormSelectProps
  extends BaseFormInputProps,
    Omit<SelectProps, 'onChange' | 'name' | 'defaultValue'> {}

export const FormSelect: FC<FormSelectProps> = (props) => {
  const [controllerProps, selectProps] =
    splitFormControllerProps<SelectProps>(props);

  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, ...rest } = field;
        return <Select {...selectProps} {...rest} error={error} />;
      }}
    />
  );
};
