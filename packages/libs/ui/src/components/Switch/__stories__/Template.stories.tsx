import type { StoryFn } from '@storybook/react';
import { Switch } from '..';

export const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

Template.args = {
  label: 'Switch',
};
