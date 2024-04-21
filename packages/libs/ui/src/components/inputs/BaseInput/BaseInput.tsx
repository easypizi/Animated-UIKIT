import { type FC, type ReactNode, useCallback } from 'react';
import { ArrowRightIcon, CheckIcon, CloseIcon } from '@easypizi/icons';
import {
  Action,
  Clear,
  ErrorMessage,
  IconHolder,
  InputWrapper,
  Label,
  Root,
  SuccessMessage,
} from './styled';

export interface BaseInputProps {
  fullWidth?: boolean;
  rootAsLabel?: boolean;
  label?: ReactNode;
  required?: boolean;
  focused?: boolean;
  allowClear?: boolean;
  allowAction?: boolean;
  actionContained?: boolean;
  error?: boolean | ReactNode;
  success?: boolean | ReactNode;
  empty?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  actionIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClear?: () => void;
  onAction?: () => void;
}

export const BaseInput: FC<BaseInputProps> = (props) => {
  const {
    fullWidth,
    label,
    rootAsLabel = true,
    required,
    focused,
    allowClear,
    allowAction,
    actionContained,
    error = false,
    success = false,
    actionIcon = <ArrowRightIcon />,
    empty,
    disabled,
    startIcon,
    endIcon,
    children,
    className,
    onClear,
    onAction,
  } = props;

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && allowAction && onAction && !empty) {
        event.preventDefault();
        onAction();
      }
    },
    [empty, onAction, allowAction],
  );

  return (
    <Root
      as={rootAsLabel ? 'label' : undefined}
      fullWidth={fullWidth}
      error={Boolean(error)}
      success={Boolean(success)}
      focused={focused}
      empty={empty}
      disabled={disabled}
      className={className}
      contained={actionContained}
    >
      {label && (
        <Label>
          {label}
          {required && ' *'}
        </Label>
      )}
      <InputWrapper onKeyDown={handleKeyPress}>
        {startIcon && <IconHolder position="start">{startIcon}</IconHolder>}
        {children}
        {allowClear && !empty && (
          <Clear onClick={onClear} position="end">
            <CloseIcon />
          </Clear>
        )}
        {allowAction && (
          <Action
            onClick={error || success ? onClear : onAction}
            position="end"
            contained={actionContained}
          >
            {error && <CloseIcon />}
            {success && <CheckIcon />}
            {!error && !success && actionIcon}
          </Action>
        )}
        {endIcon && !allowAction && (
          <IconHolder position="end">{endIcon}</IconHolder>
        )}
      </InputWrapper>
      {error && typeof error !== 'boolean' && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
      {success && typeof success !== 'boolean' && (
        <SuccessMessage>{success}</SuccessMessage>
      )}
    </Root>
  );
};
