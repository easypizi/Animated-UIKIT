import type { StoryFn } from '@storybook/react';
import { CaretLeftIcon } from '@easypizi/icons';
import { Stack } from '../../Stack';
import { Typography } from '../../Typography';
import type { IconButtonColor } from '../types';
import { IconButton } from '../IconButton';

const colors: IconButtonColor[] = [
  'primary',
  'danger',
  'base',
  'light',
  'transparent',
];

export const Showcase: StoryFn<typeof IconButton> = (args) => (
  <Stack gap={4} direction="column" alignItems="flex-start">
    {colors.map((color) => (
      <Stack
        key={color}
        gap={8}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="textLG" style={{ width: '100px' }}>
          {color.toUpperCase()}
        </Typography>
        <IconButton {...args} color={color} />
        <IconButton {...args} color={color} loading />
        <IconButton {...args} color={color} disabled />
        <IconButton {...args} color={color} label="Label" />
        <IconButton {...args} color={color} loading label="Label" />
        <IconButton {...args} color={color} disabled label="Label" />
      </Stack>
    ))}
  </Stack>
);

Showcase.args = {
  children: <CaretLeftIcon />,
};
