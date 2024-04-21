import type { StoryFn } from '@storybook/react';
import { Typography } from '..';
import { Stack } from '../../Stack';
import type { ThemeTypographyKey } from '../../../themes';

const variants: ThemeTypographyKey[] = [
  'headerXL',
  'headerLG',
  'headerMD',
  'headerSM',
  'headerXS',
  'textLGBold',
  'textMDBold',
  'textSMBold',
  'textXSBold',
  'textLG',
  'textMD',
  'textSM',
  'textXS',
  'captureSMBold',
  'captureSM',
];

export const Variant: StoryFn<typeof Typography> = (args) => (
  <Stack gap={4}>
    {variants.map((item) => {
      return (
        <Typography
          variant={item}
          {...args}
        >{`${item}: The quick brown fox jumps over the lazy dog`}</Typography>
      );
    })}
  </Stack>
);

Variant.args = {};
