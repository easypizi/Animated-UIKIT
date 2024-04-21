import type { FC } from 'react';
import { Controller } from 'react-hook-form';
import { CellNumberInput, type CellNumberInputProps } from '../../components';
import type { BaseFormInputProps } from '../types';
import { splitFormControllerProps } from '../utils';

export interface FormCellNumberInputProps
  extends BaseFormInputProps,
    Omit<
      CellNumberInputProps,
      'onChange' | 'onFocus' | 'onBlur' | 'defaultValue' | 'name'
    > {}

export const FormCellNumberInput: FC<FormCellNumberInputProps> = (props) => {
  const [controllerProps, inputProps] =
    splitFormControllerProps<CellNumberInputProps>(props);
  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, ...rest } = field;
        return <CellNumberInput {...inputProps} {...rest} />;
      }}
    />
  );
};
