import type { StoryFn } from '@storybook/react';
import { Button } from '../Button';
import type { ButtonSize } from '../types';
import { Stack } from '../../Stack';

const buttonSizes: ButtonSize[] = ['xs', 'sm', 'md'];

export const Size: StoryFn<typeof Button> = (args) => (
  <Stack gap={6} direction="row" alignItems="center">
    {buttonSizes.map((size) => (
      <Button key={size} {...args} size={size}>
        {`size: ${size}`}
      </Button>
    ))}
  </Stack>
);
