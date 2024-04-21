import type { FC } from 'react';
import { Controller } from 'react-hook-form';
import { DateFilterInput, type DateFilterInputProps } from '../../components';
import { splitFormControllerProps } from '../utils';
import type { BaseFormInputProps } from '../types';

export interface FormDateFilterInputProps
  extends BaseFormInputProps,
    Omit<DateFilterInputProps, 'onChange' | 'value'> {}

export const FormDateInputFilter: FC<FormDateFilterInputProps> = (props) => {
  const [controllerProps, inputProps] =
    splitFormControllerProps<DateFilterInputProps>(props);
  return (
    <Controller
      {...controllerProps}
      render={({ field }) => {
        return <DateFilterInput {...inputProps} {...field} />;
      }}
    />
  );
};
