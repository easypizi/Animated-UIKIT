import styled, { css } from 'styled-components';
import type { ThemeTypographyKey } from '../../themes';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
`;

export const Label = styled.label<{
  disabled: boolean;
  variant?: ThemeTypographyKey;
}>`
  ${({ theme, disabled, variant = 'textSM' }) => css`
    ${theme.typography[variant]};
    cursor: ${disabled ? 'auto' : 'pointer'};
    color: ${disabled ? theme.palette.neutral20 : theme.palette.neutral5};
    margin-left: ${theme.spacing.get(3)};
    opacity: ${disabled ? 0.8 : 1};
  `}
`;

export const ErrorText = styled.div`
  ${({ theme }) => css`
    ${theme.typography.textXSBold};
    color: ${theme.palette.danger100};
    margin-top: ${theme.spacing.get(1)};
    margin-left: ${theme.spacing.get(7)};
  `}
`;

export const IconHolder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.spacing.get(2.5)};
`;

export const StyledCheckbox = styled.div<{
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
}>`
  ${({ theme, checked, indeterminate, disabled }) => {
    let border = `${theme.spacing.get(0.25)} solid ${theme.palette.neutral40}`;
    let backgroundColor = `${theme.palette.neutral80}`;

    if (checked || indeterminate) {
      backgroundColor = `${theme.palette.primary100}`;
      border = `${theme.spacing.get(0.25)} solid ${theme.palette.primary100}`;
    }

    if (disabled) {
      backgroundColor = `${theme.palette.neutral40}`;
      border = `${theme.spacing.get(0.25)} solid ${theme.palette.neutral40}`;
    }

    return css`
      cursor: ${disabled ? 'auto' : 'pointer'};
      position: relative;
      transition: all 150ms;
      border-radius: ${theme.spacing.get(1)};
      width: ${theme.spacing.get(4)};
      height: ${theme.spacing.get(4)};
      border: ${border};
      background: ${backgroundColor};
    `;
  }}
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  &:hover {
    ${StyledCheckbox} {
      opacity: 0.8;
    }

    ${Label} {
      opacity: 0.8;
    }
  }
`;
