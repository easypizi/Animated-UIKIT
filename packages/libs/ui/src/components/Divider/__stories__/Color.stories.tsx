import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import type { ThemePaletteKey } from '../../../themes';
import { Divider } from '..';

const colors: ThemePaletteKey[] = [
  'danger100',
  'primary100',
  'success100',
  'neutral5',
];

export const Color: StoryFn<typeof Divider> = (args) => (
  <Stack gap={6} direction="column" alignItems="center">
    {colors.map((color) => (
      <Divider color={color} {...args} />
    ))}
  </Stack>
);
