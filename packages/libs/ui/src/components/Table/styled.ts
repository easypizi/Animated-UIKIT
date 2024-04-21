import styled, { css } from 'styled-components';
import type { TableVariant } from './types';

export const StyledTableRow = styled.tr``;

export const StyledTableHead = styled.thead``;

export const StyledTableBody = styled.tbody``;

export const StyledTableCell = styled.td`
  padding: ${(p) => p.theme.spacing.get(2, 3)};
  border: 0 solid ${(p) => p.theme.palette.neutral60};
  border-width: 1px 0 0 1px;
  ${(p) => p.theme.typography.textXS};
  text-align: left;
  &:first-child {
    border-left-width: 0;
  }
  &:last-child {
    text-align: right;
  }
`;

export const StyledTableHeadCellSort = styled.div<{ active?: boolean }>`
  font-size: 16px;
  line-height: 0%;
  color: ${(p) => p.theme.palette.neutral10};
  opacity: 0;
  ${(p) =>
    p.active &&
    css`
      opacity: 1;
    `}
`;

export const StyledTableHeadCellContent = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${(p) => p.theme.spacing.get(3)};
`;

interface StyledTableHeadCellProps {
  clickable?: boolean;
}

export const StyledTableHeadCell = styled(StyledTableCell).attrs({
  as: 'th',
})<StyledTableHeadCellProps>`
  ${(p) => p.theme.typography.textXSBold};
  background-color: ${(p) => p.theme.palette.neutral80};
  /* padding: ${(p) => p.theme.spacing.get(2, 3)}; */
  border-top: 0;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    text-align: right;

    ${StyledTableHeadCellContent} {
      flex-direction: row-reverse;
      text-align: right;
    }
  }

  ${(p) =>
    p.clickable &&
    css`
      cursor: pointer;

      &:hover {
        ${StyledTableHeadCellSort} {
          opacity: 0.6;
        }
      }
    `}
`;

interface StyledTableProps {
  variant: TableVariant;
  fullWidth?: boolean;
}

export const StyledTable = styled.table<StyledTableProps>`
  border-spacing: 0;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.palette.neutral60};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ variant, theme }) =>
    variant === 'list' &&
    css`
      border: none;

      ${StyledTableCell} {
        border-left: none;
        border-top: none;
        border-bottom-width: 1px;
        padding-top: ${theme.spacing.get(3)};
        padding-bottom: ${theme.spacing.get(3)};

        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
      }

      ${StyledTableHeadCell} {
        border-top: none;
        border-bottom-width: 1px;
        background-color: transparent;
      }

      ${StyledTableHeadCellContent} {
        justify-content: flex-start;
      }
    `}
`;
