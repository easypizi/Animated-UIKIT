import type { StoryFn } from '@storybook/react';
import { Cover } from '..';

export const Template: StoryFn<typeof Image> = (args) => (
  <div style={{ width: '300px', height: '300px' }}>
    <Cover {...args} />
  </div>
);

Template.args = {
  rounded: true,
  title: 'Amazing Cover',
  aspectRation: 500 / 300,
};
