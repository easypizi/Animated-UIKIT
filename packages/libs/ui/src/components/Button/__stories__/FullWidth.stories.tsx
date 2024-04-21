import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import { Button } from '../Button';

export const FullWidth: StoryFn<typeof Button> = (args) => (
  <Stack gap={6} direction="column" alignItems="center">
    <Button {...args} variant="contained" fullWidth>
      Contained button
    </Button>
    <Button {...args} variant="text" fullWidth>
      Text button
    </Button>
  </Stack>
);

FullWidth.args = {};
