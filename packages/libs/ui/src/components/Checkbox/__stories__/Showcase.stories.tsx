import type { StoryFn } from '@storybook/react';

import { Stack } from '../../Stack';
import { Checkbox } from '..';

export const Showcase: StoryFn<typeof Checkbox> = (args) => (
  <Stack gap={2}>
    <Checkbox label="Label" {...args} />
    <Checkbox label="With error text" error="Alarm!" {...args} />
    <Checkbox label="With error state" error {...args} />
    <Checkbox disabled label="Disabled" {...args} />
    <Checkbox indeterminate label="Indeterminate" {...args} />
    <Checkbox checked label="Checked by default" {...args} />
    <Checkbox checked disabled label="Checked, Disabled" {...args} />
    <Checkbox
      disabled
      indeterminate
      label="Indeterminate, Disabled"
      {...args}
    />
  </Stack>
);

Showcase.args = {};
