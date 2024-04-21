import { useState } from 'react';
import type { StoryFn } from '@storybook/react';
import { NumberInput } from '..';

export const Template: StoryFn<typeof NumberInput> = (args) => {
  const [value, setValue] = useState<number | undefined>(0);

  return <NumberInput {...args} value={value} onChange={setValue} />;
};

Template.args = {};
