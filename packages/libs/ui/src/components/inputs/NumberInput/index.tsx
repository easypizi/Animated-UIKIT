import { useCallback, type FC, type ChangeEvent } from 'react';
import { TextInput, type TextInputProps } from '../TextInput';

export interface NumberInputProps
  extends Omit<TextInputProps, 'onChange' | 'onChangeText'> {
  value?: number;
  onChange?: (value: number | undefined) => void;
}

// #TODO: refactor and fix undefined while edditing

export const NumberInput: FC<NumberInputProps> = (props) => {
  const { value, onChange, ...rest } = props;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      const numericValue = parseFloat(inputValue);

      if (!Number.isNaN(numericValue) || inputValue === '') {
        onChange?.(Number.isNaN(numericValue) ? undefined : numericValue);
      }
    },
    [onChange],
  );

  return (
    <TextInput
      {...rest}
      value={value === undefined ? '' : value}
      onChange={handleChange}
      type="number"
    />
  );
};
