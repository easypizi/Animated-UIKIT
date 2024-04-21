import type { StoryFn } from '@storybook/react';

import { Stack } from '../../Stack';
import { Switch } from '..';

export const Showcase: StoryFn<typeof Switch> = (args) => (
  <Stack gap={2}>
    <Switch label="Label" {...args} />
    <Switch label="With error text" error="Alarm!" {...args} />
    <Switch label="With error state" error {...args} />
    <Switch disabled label="Disabled" {...args} />
    <Switch checked label="Checked by default" {...args} />
    <Switch checked disabled label="Checked, Disabled" {...args} />
  </Stack>
);

Showcase.args = {};
