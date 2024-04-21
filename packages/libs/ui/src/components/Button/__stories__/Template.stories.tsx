import type { StoryFn } from '@storybook/react';
import { Button } from '../Button';

export const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

Template.args = {
  children: 'Click me',
};
