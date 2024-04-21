import styled, { css } from 'styled-components';
import { Popper } from '../Popper';

export const PopperTooltip = styled(Popper)(
  ({ theme }) => css`
    --popper-background-color: ${theme.palette.neutral5};
    max-width: 280px;
    padding: ${theme.spacing.get(1, 2)};
    border-radius: ${theme.spacing.get(2)};
    ${theme.typography.textXS};
    color: ${theme.palette.neutral100};
    background: var(--popper-background-color);
  `,
);
