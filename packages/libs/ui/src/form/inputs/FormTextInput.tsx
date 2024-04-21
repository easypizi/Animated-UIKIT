import type { FC } from 'react';
import { Controller } from 'react-hook-form';
import type { BaseFormInputProps } from '../types';
import { TextInput, type TextInputProps } from '../../components';
import { splitFormControllerProps } from '../utils';

export interface FormTextInputProps
  extends BaseFormInputProps,
    Omit<
      TextInputProps,
      'onChange' | 'onFocus' | 'onBlur' | 'defaultValue' | 'name'
    > {}

export const FormTextInput: FC<FormTextInputProps> = (props) => {
  const [controllerProps, inputProps] =
    splitFormControllerProps<TextInputProps>(props);
  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, ...rest } = field;
        return <TextInput {...inputProps} {...rest} error={error} />;
      }}
    />
  );
};
