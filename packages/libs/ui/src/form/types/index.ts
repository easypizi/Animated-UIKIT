/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ControllerProps } from 'react-hook-form';

export interface BaseFormInputProps
  extends Omit<ControllerProps<any>, 'render'> {}
