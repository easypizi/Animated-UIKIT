import styled, { css } from 'styled-components';
import type { ThemeTypographyKey } from '../../themes';

export const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
`;

export const Label = styled.label<{
  disabled: boolean;
  variant: ThemeTypographyKey;
}>`
  ${({ theme, disabled, variant }) => css`
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

export const StyledActiveState = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: #ffffff;
  ${({ theme }) => css`
    width: ${theme.spacing.get(2)};
    height: ${theme.spacing.get(2)};
    margin-left: -${theme.spacing.get(1)};
    margin-top: -${theme.spacing.get(1)};
  `}
`;

export const StyledRadioButton = styled.div<{
  checked: boolean;
  disabled: boolean;
}>`
  ${({ theme, checked, disabled }) => {
    let border = `${theme.spacing.get(0.25)} solid ${theme.palette.neutral40}`;
    let backgroundColor = `${theme.palette.neutral80}`;

    if (checked) {
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
      flex-shrink: 0;
      transition: all 150ms;
      border-radius: 50%;
      width: ${theme.spacing.get(4)};
      height: ${theme.spacing.get(4)};
      border: ${border};
      background: ${backgroundColor};
    `;
  }}
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  &:hover {
    ${StyledRadioButton} {
      opacity: 0.8;
    }

    ${Label} {
      opacity: 0.8;
    }
  }
`;
