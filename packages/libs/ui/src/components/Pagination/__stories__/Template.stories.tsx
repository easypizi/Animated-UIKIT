import type { StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from '..';

export const Template: StoryFn<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onChangePage={setCurrentPage}
    />
  );
};

Template.args = {
  totalPages: 10,
};
