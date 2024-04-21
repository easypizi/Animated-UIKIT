import { type FC, useMemo } from 'react';
import { PaginationItem } from './PaginationItem';
import { Stack } from '../Stack';

export interface PaginationProps {
  currentPage: number;
  totalPages?: number | null;
  hasNextPage?: boolean;
  onChangePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { currentPage, totalPages = null, hasNextPage, onChangePage } = props;

  const pages = useMemo(() => {
    if (totalPages === null) {
      return [currentPage];
    }

    const allPages: Array<number | null> = [];

    for (let i = 1; i <= totalPages; i += 1) {
      allPages.push(i);
    }

    if (totalPages <= 7) {
      return allPages;
    }

    let result: Array<number | null> = [];

    if (currentPage <= 4) {
      result = [1, 2, 3, 4, 5, null, totalPages];
    } else if (totalPages - currentPage < 4) {
      result = [
        1,
        null,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      result = [
        1,
        null,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        null,
        totalPages,
      ];
    }

    return result;
  }, [currentPage, totalPages]);

  return (
    <Stack direction="row" gap={2}>
      <PaginationItem
        type="start"
        page={1}
        disabled={currentPage === 1}
        onSelect={onChangePage}
      />
      <PaginationItem
        type="prev"
        page={currentPage - 1}
        disabled={currentPage === 1}
        onSelect={onChangePage}
      />

      {pages.map((item, index) => (
        <PaginationItem
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type={item === null ? 'ellipsis' : 'page'}
          page={item === null ? undefined : item}
          selected={currentPage === item}
          onSelect={onChangePage}
        />
      ))}

      <PaginationItem
        type="next"
        page={currentPage + 1}
        disabled={
          totalPages !== null
            ? currentPage >= totalPages
            : hasNextPage === false
        }
        onSelect={onChangePage}
      />

      {totalPages !== null && (
        <PaginationItem
          type="end"
          page={totalPages}
          disabled={currentPage >= totalPages}
          onSelect={onChangePage}
        />
      )}
    </Stack>
  );
};
