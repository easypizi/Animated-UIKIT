import type { StoryFn } from '@storybook/react';
import { CaretLeftIcon } from '@easypizi/icons';
import { Button } from '../Button';
import { Stack } from '../../Stack';

export const Icons: StoryFn<typeof Button> = (args) => (
  <Stack gap={6} direction="row" alignItems="center">
    <Button {...args}>No icons</Button>
    <Button {...args} startIcon={<CaretLeftIcon />}>
      Start icon
    </Button>
    <Button {...args} endIcon={<CaretLeftIcon />}>
      End icon
    </Button>
    <Button {...args} startIcon={<CaretLeftIcon />} endIcon={<CaretLeftIcon />}>
      Both icons
    </Button>
  </Stack>
);

Icons.args = {};
