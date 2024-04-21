import type { StoryFn } from '@storybook/react';
import { Skeleton } from '..';

export const Template: StoryFn<typeof Skeleton> = () => (
  <div style={{ width: '100px', height: '100px', borderRadius: '12px' }}>
    <Skeleton />
  </div>
);

Template.args = {};
