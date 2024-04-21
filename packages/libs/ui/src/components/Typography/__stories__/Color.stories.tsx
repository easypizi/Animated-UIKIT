import type { StoryFn } from '@storybook/react';
import { Typography } from '..';
import { Stack } from '../../Stack';
import type { ThemePaletteKey } from '../../../themes';

const colors: ThemePaletteKey[] = [
  'danger100',
  'danger10',
  'success100',
  'success10',
  'warning100',
  'warning10',
  'primary100',
  'primary10',
  'neutral100',
  'neutral80',
  'neutral60',
  'neutral40',
  'neutral20',
  'neutral10',
  'neutral5',
];

export const Color: StoryFn<typeof Typography> = (args) => (
  <Stack gap={2}>
    {colors.map((item) => {
      return <Typography variant="textLGBold" color={item} {...args} />;
    })}
  </Stack>
);

Color.args = {
  children: 'The quick brown fox jumps over the lazy dog.',
};
