import { type FC, useCallback } from 'react';
import {
  CaretLeftIcon,
  CaretRightIcon,
  EndIcon,
  StartIcon,
} from '@easypizi/icons';
import { Item } from './styled';

export interface PaginationItemProps {
  type: 'start' | 'prev' | 'page' | 'next' | 'end' | 'ellipsis';
  page?: number;
  disabled?: boolean;
  selected?: boolean;
  onSelect?: (page: number) => void;
}

export const PaginationItem: FC<PaginationItemProps> = (props) => {
  const { type, page = null, disabled, selected, onSelect } = props;

  const onClick = useCallback(() => {
    if (page && onSelect) {
      onSelect(page);
    }
  }, [page, onSelect]);

  return (
    <Item
      disabled={disabled}
      selected={selected}
      onClick={disabled || selected || !page ? undefined : onClick}
    >
      {type === 'start' && <StartIcon />}
      {type === 'prev' && <CaretLeftIcon />}
      {type === 'next' && <CaretRightIcon />}
      {type === 'end' && <EndIcon />}
      {type === 'ellipsis' && '...'}
      {type === 'page' && page}
    </Item>
  );
};
