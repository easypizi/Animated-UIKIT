import { useState, type FC, useCallback } from 'react';
import { CheckIcon, MinusIcon } from '@easypizi/icons';
import {
  CheckboxContainer,
  ErrorText,
  HiddenCheckbox,
  IconHolder,
  Label,
  StyledCheckbox,
} from './styled';
import type { ThemeTypographyKey } from '../../themes';

export interface CheckboxProps {
  label?: string;
  labelVariant?: ThemeTypographyKey;
  indeterminate?: boolean;
  checked?: boolean;
  disabled?: boolean;
  error?: string | boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  label = '',
  labelVariant,
  indeterminate = false,
  checked = false,
  disabled = false,
  onChange,
  error = false,
}) => {
  const [internalChecked, setInternalChecked] = useState(checked);

  const handleOnChange = useCallback(() => {
    if (disabled) {
      return;
    }
    const newChecked = !internalChecked;
    setInternalChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  }, [disabled, internalChecked, onChange]);

  return (
    <div>
      <CheckboxContainer onClick={handleOnChange}>
        <HiddenCheckbox checked={internalChecked} disabled={disabled} />
        <StyledCheckbox
          checked={internalChecked}
          indeterminate={indeterminate}
          disabled={disabled}
        >
          {internalChecked && (
            <IconHolder>
              <CheckIcon color="#ffffff" />
            </IconHolder>
          )}
          {indeterminate && (
            <IconHolder>
              <MinusIcon color="#ffffff" />
            </IconHolder>
          )}
        </StyledCheckbox>
        {label && (
          <Label variant={labelVariant} disabled={disabled}>
            {label}
          </Label>
        )}
      </CheckboxContainer>
      {error && (
        <ErrorText>{typeof error === 'string' ? error : 'Error'}</ErrorText>
      )}
    </div>
  );
};
