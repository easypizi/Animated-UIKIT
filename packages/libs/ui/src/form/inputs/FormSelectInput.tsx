import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { SelectInput, type SelectInputProps } from '../../components';
import { splitFormControllerProps } from '../utils';
import type { BaseFormInputProps } from '../types';

export interface FormSelectInputProps
  extends BaseFormInputProps,
    Omit<SelectInputProps, 'onChange' | 'name' | 'defaultValue'> {}

export const FormSelectInput: FC<FormSelectInputProps> = (props) => {
  const [controllerProps, selectProps] =
    splitFormControllerProps<SelectInputProps>(props);

  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, ...rest } = field;
        return (
          <SelectInput fixValue {...selectProps} {...rest} error={error} />
        );
      }}
    />
  );
};
