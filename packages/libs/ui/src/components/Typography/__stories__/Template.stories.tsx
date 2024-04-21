import type { StoryFn } from '@storybook/react';
import { Typography } from '..';

export const Template: StoryFn<typeof Typography> = (args) => (
  <Typography {...args} />
);

Template.args = {
  children: 'The quick brown fox jumps over the lazy dog.',
};
