import type { StoryFn } from '@storybook/react';

import { Stack } from '../../Stack';
import { RadioButton } from '..';
import { RadioGroup } from '../../RadioGroup';
import { Typography } from '../../Typography';

const options = [
  { name: 'button1', label: 'Left' },
  { name: 'button2', label: 'Middle' },
  { name: 'button3', label: 'Right' },
];

export const Showcase: StoryFn<typeof RadioButton> = (args) => (
  <Stack gap={2}>
    <RadioButton label="Label" {...args} />
    <RadioButton label="With error text" error="Alarm!" {...args} />
    <RadioButton label="With error state" error {...args} />
    <RadioButton disabled label="Disabled" {...args} />
    <RadioButton checked label="Checked by default" {...args} />
    <RadioButton checked disabled label="Checked, Disabled" {...args} />
    <div style={{ marginTop: '20px' }}>
      <Typography>Radio group</Typography>
      <RadioGroup options={options} gap={4} />
    </div>
  </Stack>
);

Showcase.args = {};
