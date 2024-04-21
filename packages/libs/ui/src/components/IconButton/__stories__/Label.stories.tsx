import type { StoryFn } from '@storybook/react';
import { CaretLeftIcon } from '@easypizi/icons';
import { Stack } from '../../Stack';
import { IconButton } from '../IconButton';

export const Label: StoryFn<typeof IconButton> = (args) => (
  <Stack gap={6} direction="column" alignItems="flex-start">
    <IconButton {...args} />
    <IconButton {...args} label="Right label" labelPosition="right" />
    <IconButton {...args} label="Left label" labelPosition="left" />
    <IconButton {...args} label="Bottom label" labelPosition="bottom" />
  </Stack>
);

Label.args = {
  children: <CaretLeftIcon />,
};
