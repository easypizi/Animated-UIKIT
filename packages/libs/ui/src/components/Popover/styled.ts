import styled, { css } from 'styled-components';
import { Popper } from '../Popper';
import { Stack } from '../Stack';

export const StyledPopper = styled(Popper)<{ width?: string }>(
  ({ theme, width }) => css`
    --popper-background-color: ${theme.palette.background.main};

    display: flex;
    flex-direction: column;
    max-width: 320px;
    padding: ${theme.spacing.get(3, 4, 4)};
    border-radius: ${theme.spacing.get(2)};
    ${theme.typography.textSM};
    color: ${theme.palette.neutral5};
    background: var(--popper-background-color);
    filter: drop-shadow(0 0 8px #22222233);

    ${width &&
    css`
      width: ${width};
      max-width: 100vw;
    `}
  `,
);

export const Title = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.spacing.get(3)};
    ${theme.typography.textSMBold};
  `,
);

export const Footer = styled(Stack)`
  margin-top: ${(p) => p.theme.spacing.get(3)};
`;
