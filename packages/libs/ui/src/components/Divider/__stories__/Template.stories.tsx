import type { StoryFn } from '@storybook/react';
import { Divider } from '..';

export const Template: StoryFn<typeof Divider> = (args) => (
  <Divider {...args} />
);

Template.args = {};
