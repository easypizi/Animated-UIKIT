import { useState, type FC, useCallback, useEffect } from 'react';
import {
  ErrorText,
  HiddenRadioButton,
  Label,
  RadioButtonContainer,
  StyledActiveState,
  StyledRadioButton,
} from './styled';
import type { ThemeTypographyKey } from '../../themes';

export interface RadioButtonProps {
  name: string;
  label?: string;
  labelVariant?: ThemeTypographyKey;
  checked?: boolean;
  disabled?: boolean;
  error?: string | boolean;
  className?: string;
  onChange?: (value: boolean) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  name,
  label = '',
  className,
  labelVariant = 'textSM',
  checked = false,
  disabled = false,
  error = false,
  onChange,
}) => {
  const [internalChecked, setInternalChecked] = useState(checked);

  const handleOnChange = useCallback(() => {
    if (disabled || checked) {
      return;
    }
    setInternalChecked(true);
    if (onChange) {
      onChange(true);
    }
  }, [disabled, checked, onChange]);

  useEffect(() => {
    setInternalChecked(checked);
  }, [checked]);

  return (
    <>
      <RadioButtonContainer className={className} onClick={handleOnChange}>
        <HiddenRadioButton
          name={name}
          checked={internalChecked}
          disabled={disabled}
        />
        <StyledRadioButton checked={internalChecked} disabled={disabled}>
          {internalChecked && <StyledActiveState />}
        </StyledRadioButton>
        {label && (
          <Label variant={labelVariant} disabled={disabled}>
            {label}
          </Label>
        )}
      </RadioButtonContainer>
      {error && (
        <ErrorText>{typeof error === 'string' ? error : 'Error'}</ErrorText>
      )}
    </>
  );
};
