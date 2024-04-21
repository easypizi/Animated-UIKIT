import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { splitFormControllerProps } from '../utils';
import type { BaseFormInputProps } from '../types';
import { Switch, type SwitchProps } from '../../components';

export interface FormSwitchProps
  extends BaseFormInputProps,
    Omit<SwitchProps, 'onChange'> {}

export const FormSwitch: FC<FormSwitchProps> = (props) => {
  const [controllerProps, switchProps] =
    splitFormControllerProps<SwitchProps>(props);

  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => {
        let error: boolean | string | undefined = fieldState.invalid;
        if (error && fieldState.error?.message) {
          error = fieldState.error.message;
        }
        const { ref, value, ...rest } = field;
        return (
          <Switch {...switchProps} {...rest} checked={value} error={error} />
        );
      }}
    />
  );
};
