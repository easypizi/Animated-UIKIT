import { ArrowDownIcon, ArrowUpIcon } from '@easypizi/icons';
import { type FC, type HTMLProps, useCallback } from 'react';
import {
  StyledTableHeadCell,
  StyledTableHeadCellContent,
  StyledTableHeadCellSort,
} from './styled';

export interface TableHeadCellProps
  extends Omit<HTMLProps<HTMLTableCellElement>, 'as' | 'ref'> {
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  onChangeSortDirection?: (sortDirection: 'asc' | 'desc') => void;
}

export const TableHeadCell: FC<TableHeadCellProps> = (props) => {
  const {
    sortable,
    sortDirection,
    onChangeSortDirection,
    onClick,
    children,
    ...rest
  } = props;

  const handleSortClick = useCallback(
    (event) => {
      if (onClick) {
        onClick(event);
      }
      if (sortable && onChangeSortDirection) {
        onChangeSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      }
    },
    [sortable, sortDirection, onClick, onChangeSortDirection],
  );

  return (
    <StyledTableHeadCell
      onClick={handleSortClick}
      clickable={sortable || Boolean(onClick)}
      {...rest}
    >
      <StyledTableHeadCellContent>
        {children}
        {sortable && (
          <StyledTableHeadCellSort active={sortDirection !== null}>
            {sortDirection === 'asc' ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </StyledTableHeadCellSort>
        )}
      </StyledTableHeadCellContent>
    </StyledTableHeadCell>
  );
};
