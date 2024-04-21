import type { StoryFn } from '@storybook/react';
import { Checkbox } from '..';

export const Template: StoryFn<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

Template.args = {
  label: 'Checkbox',
};
