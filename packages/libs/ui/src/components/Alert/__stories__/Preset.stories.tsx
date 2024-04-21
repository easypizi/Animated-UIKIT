import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import type { AlertPreset } from '../types';
import { Alert } from '../Alert';

const presets: AlertPreset[] = [
  'neutral',
  'info',
  'success',
  'error',
  'warning',
];

export const Preset: StoryFn<typeof Alert> = (args) => (
  <Stack gap={4} direction="column" alignItems="flex-start">
    {presets.map((preset) => (
      <Alert {...args} preset={preset}>
        {`Alert with "${preset}" preset`}
      </Alert>
    ))}
  </Stack>
);

Preset.args = {};
