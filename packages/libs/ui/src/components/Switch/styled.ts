import styled, { css } from 'styled-components';
import type { ThemeTypographyKey } from '../../themes';

export const HiddenSwitch = styled.input.attrs({ type: 'checkbox' })`
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
    margin: ${theme.spacing.get(0, 3)};
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

export const StyledSwitchHandler = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacing.get(4.25)};
    height: ${theme.spacing.get(4.25)};
    background: ${theme.palette.neutral10};
    transition: all 150ms;
    position: absolute;
    top: 50%;
    margin-top: -${theme.spacing.get(2.125)};
    border-radius: 50%;
  `}
`;

export const StyledSwitch = styled.div<{
  checked: boolean;
  disabled: boolean;
}>`
  ${({ theme, disabled }) => css`
    cursor: ${disabled ? 'auto' : 'pointer'};
    position: relative;
    transition: all 150ms;
    border-radius: ${theme.spacing.get(5, 5, 5, 5)};
    width: ${theme.spacing.get(8)};
    height: ${theme.spacing.get(4)};
    background: ${theme.palette.neutral60};
  `}

  ${StyledSwitchHandler} {
    ${({ checked, theme }) =>
      checked &&
      css`
        background: ${theme.palette.primary100};
        transform: translateX(${theme.spacing.get(4)});
      `}

    ${({ disabled, theme }) =>
      disabled &&
      css`
        background: ${theme.palette.neutral20};
      `}
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  &:hover {
    ${StyledSwitch} {
      opacity: 0.8;
    }

    ${Label} {
      opacity: 0.8;
    }
  }
`;
