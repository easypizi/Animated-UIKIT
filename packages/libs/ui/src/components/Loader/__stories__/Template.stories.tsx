import type { StoryFn } from '@storybook/react';
import { Loader } from '..';

export const Template: StoryFn<typeof Loader> = (props) => (
  <Loader {...props} />
);
