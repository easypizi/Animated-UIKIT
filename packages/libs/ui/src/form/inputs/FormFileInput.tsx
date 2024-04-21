import type { FC } from 'react';
import { Controller } from 'react-hook-form';
import type { BaseFormInputProps } from '../types';
import { FileInput, type FileInputProps } from '../../components';
import { splitFormControllerProps } from '../utils';

type InputProps = Omit<
  FileInputProps<false, false>,
  'onChange' | 'onFocus' | 'onBlur' | 'defaultValue' | 'name' | 'value'
>;

export interface FormFileInputProps extends BaseFormInputProps, InputProps {}

export const FormFileInput: FC<FormFileInputProps> = (props) => {
  const [controllerProps, inputProps] =
    splitFormControllerProps<InputProps>(props);
  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, ...rest } = field;
        return <FileInput {...inputProps} {...rest} error={error} />;
      }}
    />
  );
};
