import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import { Button } from '../Button';

export const Variant: StoryFn<typeof Button> = (args) => (
  <Stack gap={6} direction="row" alignItems="center">
    <Button {...args} variant="contained">
      Contained button
    </Button>
    <Button {...args} variant="text">
      Text button
    </Button>
  </Stack>
);

Variant.args = {};
