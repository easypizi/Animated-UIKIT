import type { StoryFn } from '@storybook/react';
import { Typography } from '../../Typography';
import { Stack } from '../../Stack';
import { type TagColor, Tag } from '..';

const colors: TagColor[] = [
  'blue',
  'lightgray',
  'warning',
  'white',
  'lightblue',
];

export const Showcase: StoryFn<typeof Tag> = (args) => (
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
        <Tag {...args} color={color} />
        <Tag {...args} view="label" color={color} />
      </Stack>
    ))}
  </Stack>
);

Showcase.args = {
  children: 'simple tag',
};
