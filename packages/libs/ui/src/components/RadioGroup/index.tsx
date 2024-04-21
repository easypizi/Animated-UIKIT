import { useCallback, useState, type FC, useMemo } from 'react';
import { RadioButton, type RadioButtonProps } from '../RadioButton';
import type { ThemeTypographyKey } from '../../themes';
import { ErrorMessage, RadioGroupWrapper } from './styled';

export interface RadioGroupProps {
  options: RadioButtonProps[];
  className?: string;
  direction?: 'row' | 'column';
  labelVariant?: ThemeTypographyKey;
  gap?: number;
  error?: boolean | string;
  onValueChange?: (checkedRadioName: string) => void;
  onChange?: (checkedRadioName: string) => void;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  gap = 1,
  direction = 'row',
  error,
  labelVariant,
  className,
  onValueChange,
  onChange,
}) => {
  const initialStates = options.reduce(
    (acc, option) => {
      acc[option.name] = option.checked ?? false;
      return acc;
    },
    {} as Record<string, boolean>,
  );

  const [radioStates, setRadioStates] =
    useState<Record<string, boolean>>(initialStates);

  const handleOnChange = useCallback(
    (name: string) => {
      const newStates = Object.keys(radioStates).reduce(
        (acc, key) => {
          acc[key] = key === name;
          return acc;
        },
        {} as Record<string, boolean>,
      );

      setRadioStates(newStates);

      if (onValueChange) {
        onValueChange(name);
      }

      onChange?.(name);
    },
    [radioStates, onValueChange, onChange],
  );

  const buttons = useMemo(() => {
    return options.map(({ label, disabled, error: optionError, name }) => (
      <RadioButton
        key={name}
        name={name}
        label={label}
        labelVariant={labelVariant}
        checked={radioStates[name]}
        disabled={disabled}
        error={optionError}
        onChange={() => handleOnChange(name)}
      />
    ));
  }, [options, labelVariant, radioStates, handleOnChange]);

  return (
    <>
      <RadioGroupWrapper
        className={className}
        gap={gap}
        direction={direction}
        error={error}
      >
        {buttons}
      </RadioGroupWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};
