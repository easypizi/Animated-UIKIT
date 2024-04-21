import type { Meta } from '@storybook/react';
import { Typography } from '..';

export default {
  component: Typography,
  title: 'UI/Content/Typography',
} as Meta<typeof Typography>;

export { Playground } from './Playground.stories';
export { Variant } from './Variant.stories';
export { Color } from './Color.stories';
