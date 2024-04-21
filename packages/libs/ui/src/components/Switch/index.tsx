import { useState, type FC, useCallback } from 'react';
import {
  SwitchContainer,
  ErrorText,
  HiddenSwitch,
  Label,
  StyledSwitch,
  StyledSwitchHandler,
} from './styled';
import type { ThemeTypographyKey } from '../../themes';

export interface SwitchProps {
  label?: string;
  labelVariant?: ThemeTypographyKey;
  checked?: boolean;
  labelPosition?: 'start' | 'end';
  disabled?: boolean;
  error?: string | boolean;
  onChange?: (value: boolean) => void;
}

export const Switch: FC<SwitchProps> = ({
  label = '',
  labelPosition = 'end',
  labelVariant,
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
      <SwitchContainer onClick={handleOnChange}>
        {label && labelPosition === 'start' && (
          <Label variant={labelVariant} disabled={disabled}>
            {label}
          </Label>
        )}
        <HiddenSwitch checked={internalChecked} disabled={disabled} />
        <StyledSwitch checked={internalChecked} disabled={disabled}>
          <StyledSwitchHandler />
        </StyledSwitch>
        {label && labelPosition === 'end' && (
          <Label variant={labelVariant} disabled={disabled}>
            {label}
          </Label>
        )}
      </SwitchContainer>
      {error && (
        <ErrorText>{typeof error === 'string' ? error : 'Error'}</ErrorText>
      )}
    </div>
  );
};
