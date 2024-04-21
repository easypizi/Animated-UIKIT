import { useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { CellNumberInput } from '..';

export const Template: StoryFn<typeof CellNumberInput> = (args) => {
  const [value, setValue] = useState<string | undefined>('');

  return <CellNumberInput {...args} value={value} onChange={setValue} />;
};

Template.args = {};
