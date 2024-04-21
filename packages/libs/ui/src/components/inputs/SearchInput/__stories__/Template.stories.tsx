import { useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { SearchInput } from '..';

export const Template: StoryFn<typeof SearchInput> = (args) => {
  const [value, setValue] = useState('');

  return <SearchInput {...args} value={value} onChangeText={setValue} />;
};

Template.args = {};
