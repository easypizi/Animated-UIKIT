import type { Meta } from '@storybook/react';
import { Alert } from '..';

export default {
  component: Alert,
  title: 'UI/Feedback/Alert',
} as Meta<typeof Alert>;

export { Playground } from './Playground.stories';
export { Preset } from './Preset.stories';
