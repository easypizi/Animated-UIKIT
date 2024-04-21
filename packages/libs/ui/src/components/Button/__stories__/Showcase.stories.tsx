import type { StoryFn } from '@storybook/react';
import { Typography } from '../../Typography';
import { Stack } from '../../Stack';
import { Button } from '../Button';
import type { ButtonColor } from '../types';

const colors: ButtonColor[] = ['primary', 'danger', 'base', 'light', 'dark'];

export const Showcase: StoryFn<typeof Button> = (args) => (
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
        <Button {...args} variant="contained" color={color} />
        <Button {...args} variant="contained" color={color} loading />
        <Button {...args} variant="contained" color={color} disabled />
        <Button {...args} variant="text" color={color} />
        <Button {...args} variant="text" color={color} loading />
        <Button {...args} variant="text" color={color} disabled />
      </Stack>
    ))}
  </Stack>
);

Showcase.args = {
  children: 'Button',
};
