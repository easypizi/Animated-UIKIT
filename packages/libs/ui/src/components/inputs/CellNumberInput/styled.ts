import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  min-width: 0px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.get(2, 3)};
  border: none;
  font: inherit;
  color: ${({ theme }) => theme.palette.neutral5};
  background: transparent;
  outline: none;
  flex-shrink: 0;
  text-align: center;
`;

export const InputWrapper = styled.div<{ focused?: boolean }>`
  ${({ theme }) => css`
    display: flex;
    align-items: stretch;
    min-height: ${theme.spacing.get(11)};
    box-shadow: 0 0 0 1px ${theme.palette.neutral60};
    border-radius: 12px;

    ${theme.typography.textSMBold};
    font-size: 14px;
    line-height: 20px;
    color: ${theme.palette.neutral5};
    background: ${theme.palette.background.main};

    border: none;
    outline: none;
    overflow: hidden;
  `}

  ${({ focused, theme }) =>
    focused &&
    css`
      background: transparent;
      box-shadow: 0 0 0 2px ${theme.palette.primary100};

      ${StyledInput} {
        color: ${theme.palette.primary100};
      }
    `}
`;
