import type { StoryFn } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '..';

export const Template: StoryFn<typeof Table> = (args) => {
  return (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeadCell>Col 1</TableHeadCell>
          <TableHeadCell>Col 2</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Row 1 Value 1</TableCell>
          <TableCell>Row 1 Value 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2 Value 1</TableCell>
          <TableCell>Row 2 Value 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 3 Value 1</TableCell>
          <TableCell>Row 3 Value 2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

Template.args = {};
