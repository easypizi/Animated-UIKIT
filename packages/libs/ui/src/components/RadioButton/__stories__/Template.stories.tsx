import type { StoryFn } from '@storybook/react';
import { RadioButton } from '..';

export const Template: StoryFn<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

Template.args = {
  label: 'RadioButton',
};
