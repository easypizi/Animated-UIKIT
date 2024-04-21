import type { StoryFn } from '@storybook/react';
import { CaretLeftIcon } from '@easypizi/icons';
import { Stack } from '../../Stack';
import { IconButton } from '../IconButton';
import type { IconButtonSize } from '../types';

const buttonSizes: IconButtonSize[] = ['xs', 'sm', 'md'];

export const Size: StoryFn<typeof IconButton> = (args) => (
  <Stack gap={6} direction="row" alignItems="center">
    {buttonSizes.map((size) => (
      <IconButton key={size} {...args} size={size} label={`Size: ${size}`} />
    ))}
  </Stack>
);

Size.args = {
  children: <CaretLeftIcon />,
};
