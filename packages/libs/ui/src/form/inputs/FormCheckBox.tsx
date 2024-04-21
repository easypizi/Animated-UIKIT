import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Checkbox, type CheckboxProps } from '../../components';
import { splitFormControllerProps } from '../utils';
import type { BaseFormInputProps } from '../types';

export interface FormCheckBoxProps
  extends BaseFormInputProps,
    Omit<CheckboxProps, 'OnChange'> {}

export const FormCheckBox: FC<FormCheckBoxProps> = (props) => {
  const [controllerProps, checkBoxProps] =
    splitFormControllerProps<CheckboxProps>(props);

  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, ...rest } = field;
        return <Checkbox {...checkBoxProps} {...rest} error={error} />;
      }}
    />
  );
};
