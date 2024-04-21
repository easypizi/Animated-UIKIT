import type { StoryFn } from '@storybook/react';
import { Tabs } from '../Tabs';

const getTabs = () =>
  ['Wallet', 'Styles', 'AI`s', 'Tasks'].map((tab) => (
    <div
      style={{
        width: '100%',
        padding: '5px 15px 10px',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      {tab}
    </div>
  ));

export const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs activeIndex={2} {...args} />
);

Template.args = {
  tabs: getTabs(),
};
