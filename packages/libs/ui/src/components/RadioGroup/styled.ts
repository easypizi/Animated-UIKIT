import styled, { css } from 'styled-components';
import { Stack } from '../Stack';

export const RadioGroupWrapper = styled(Stack)<{ error?: boolean | string }>`
  ${({ theme, error }) =>
    error &&
    css`
      /* border: 1px solid ${theme.palette.danger100};
      border-radius: ${theme.spacing.get(5)}; */
    `}
`;

export const ErrorMessage = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacing.get(1, 4, 0)};
    ${theme.typography.textXSBold};
    color: ${theme.palette.danger100};
  `,
);
