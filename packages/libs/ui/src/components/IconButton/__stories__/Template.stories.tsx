import type { StoryFn } from '@storybook/react';
import { CaretLeftIcon } from '@easypizi/icons';
import { IconButton } from '../IconButton';

export const Template: StoryFn<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

Template.args = {
  children: <CaretLeftIcon />,
};
