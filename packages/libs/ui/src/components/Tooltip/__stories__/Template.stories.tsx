import type { StoryFn } from '@storybook/react';
import { Tooltip } from '..';

export const Template: StoryFn<typeof Tooltip> = (args) => (
  <div style={{ padding: '100px' }}>
    <Tooltip {...args}>
      <span>Example tooltip</span>
    </Tooltip>
  </div>
);

Template.args = {
  content: 'Tooltip content',
  arrow: true,
};
