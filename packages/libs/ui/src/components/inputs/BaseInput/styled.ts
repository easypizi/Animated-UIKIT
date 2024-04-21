import styled, { css } from 'styled-components';

export const Label = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.spacing.get(2)};
    ${theme.typography.textSM};
  `,
);

export const InputWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: stretch;
    min-height: ${theme.spacing.get(11)};
    box-shadow: 0 0 0 1px ${theme.palette.neutral60};
    border-radius: 12px;

    ${theme.typography.base};
    font-size: 14px;
    line-height: 20px;
    color: ${theme.palette.neutral5};
    background: ${theme.palette.background.main};

    border: none;
    outline: none;
    overflow: hidden;
  `,
);

export const ErrorMessage = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacing.get(1, 4, 0)};
    ${theme.typography.textXSBold};
    color: ${theme.palette.danger100};
  `,
);

export const SuccessMessage = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacing.get(1, 4, 0)};
    ${theme.typography.textXSBold};
    color: ${theme.palette.success100};
  `,
);

export const IconHolder = styled.div<{
  position?: 'start' | 'end';
  contained?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  gap: ${({ theme }) => theme.spacing.get(3)};

  ${({ theme, position }) => {
    if (position === 'start') {
      return css`
        padding-left: ${theme.spacing.get(3)};
        &:first-child {
          padding-left: ${theme.spacing.get(4)};
        }
      `;
    }
    if (position === 'end') {
      return css`
        padding-right: ${theme.spacing.get(3)};
        &:last-child {
          padding-right: ${theme.spacing.get(4)};
        }
      `;
    }
    return '';
  }}
`;

export const Clear = styled(IconHolder)`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary100};
  }
`;

export const Action = styled(IconHolder)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.palette.neutral100};
    height: ${theme.spacing.get(10)};
    padding: ${theme.spacing.get(3)} !important;
    border-radius: ${theme.spacing.get(2.5)};
    margin: auto;
    margin-right: ${theme.spacing.get(0.25)};

    &:hover {
      cursor: pointer;
    }
  `}

  ${({ theme, contained }) =>
    contained &&
    css`
      background: ${theme.palette.neutral40};
      color: ${theme.palette.neutral100};
    `}
`;

interface RootProps {
  focused?: boolean;
  empty?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  success?: boolean;
  contained?: boolean;
}

export const Root = styled.div<RootProps>(
  ({
    theme,
    focused,
    empty,
    disabled,
    error,
    fullWidth,
    success,
    contained,
  }) => css`
    display: inline-flex;
    flex-direction: column;
    color: ${theme.palette.neutral5};

    ${focused &&
    !error &&
    !success &&
    css`
      ${InputWrapper} {
        background: transparent;
        box-shadow: 0 0 0 2px ${theme.palette.primary100};
      }

      ${Clear} {
        color: ${theme.palette.primary100};
      }

      ${Action} {
        background: none;
        color: ${theme.palette.primary100};
      }
    `};

    ${focused &&
    !error &&
    !success &&
    contained &&
    css`
      ${Action} {
        background: ${theme.palette.primary100};
        color: ${theme.palette.neutral100};
      }
    `}

    ${empty &&
    css`
      /* color: ${theme.palette.neutral20}; */
      ${InputWrapper} {
        color: ${theme.palette.neutral20};
      }
    `};

    ${disabled &&
    css`
      color: ${theme.palette.neutral10};
      background-color: ${theme.palette.neutral60};
    `};

    ${error &&
    css`
      color: ${theme.palette.danger100};

      ${InputWrapper} {
        box-shadow: 0 0 0 2px ${theme.palette.danger100};
      }

      ${Action} {
        background: none;
        color: ${theme.palette.danger100};
      }
    `}

    ${success &&
    css`
      ${InputWrapper} {
        box-shadow: 0 0 0 2px ${theme.palette.success100};
      }

      ${Action} {
        background: none;
        color: ${theme.palette.success100};
      }
    `}
    
    ${fullWidth &&
    css`
      display: flex;
      width: 100%;

      ${InputWrapper} {
        width: 100%;
      }
    `}
  `,
);
