import styled, { css } from 'styled-components';

export interface StyledInputProps {
  minLines?: number;
  maxLines?: number;
  multiline?: boolean;
  monospace?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  min-width: 0px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.get(2, 3)};
  border: none;
  font: inherit;
  color: ${({ theme }) => theme.palette.neutral5};
  background: transparent;
  outline: none;

  ${({ multiline }) =>
    multiline &&
    css`
      min-height: 164px;
      padding: ${(p) => p.theme.spacing.get(3, 3)};
      resize: none;
    `}

  ${({ multiline, minLines }) =>
    multiline &&
    minLines &&
    css`
      min-height: ${minLines * 20}px;
    `}

  ${({ multiline, maxLines }) =>
    multiline &&
    maxLines &&
    css`
      max-height: ${maxLines ? `${maxLines * 20}px` : 'none'};
    `}

  ${({ monospace, theme }) =>
    monospace &&
    css`
      font-family: ${theme.typography.fontFamilyMonoSpace};
    `}

  &:first-child {
    padding-left: ${({ theme }) => theme.spacing.get(4)};
  }

  &:last-child {
    padding-right: ${({ theme }) => theme.spacing.get(4)};
  }
`;
