import type { StoryFn } from '@storybook/react';
import { GiftIcon } from '../components';

export const Template: StoryFn<typeof GiftIcon> = (args) => (
  <GiftIcon {...args} />
);

Template.args = {
  width: 30,
  height: 30,
  color: 'inherit',
};
