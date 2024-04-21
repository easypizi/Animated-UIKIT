import type { StoryFn } from '@storybook/react';
import { TextInput } from '..';

export const Template: StoryFn<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

Template.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};
