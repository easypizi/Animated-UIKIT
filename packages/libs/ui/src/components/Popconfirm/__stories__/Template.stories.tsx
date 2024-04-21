/* eslint-disable no-alert */
import type { StoryFn } from '@storybook/react';
import { Popconfirm } from '..';

export const Template: StoryFn<typeof Popconfirm> = (args) => {
  return (
    <div style={{ padding: '140px' }}>
      <Popconfirm
        {...args}
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Canceled')}
      >
        <button type="button">Show confirm</button>
      </Popconfirm>
    </div>
  );
};

Template.args = {
  title: 'Confirm',
  description: 'This action needs your confirmation',
  arrow: true,
};
