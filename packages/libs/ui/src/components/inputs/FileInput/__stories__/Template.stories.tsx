import type { StoryFn } from '@storybook/react';
import { UserIcon } from '@easypizi/icons';
import { FileInput } from '../FileInput';

export const Template: StoryFn<typeof FileInput> = (args) => (
  <FileInput {...args} />
);

Template.args = {
  label: 'Avatar',
  labelIcon: <UserIcon />,
  description: 'Upload profile avatar',
  placeholder: 'Upload',
};
