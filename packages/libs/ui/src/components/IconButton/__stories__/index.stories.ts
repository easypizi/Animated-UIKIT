import type { Meta } from '@storybook/react';
import { IconButton } from '..';

export default {
  component: IconButton,
  title: 'UI/Inputs/IconButton',
} as Meta<typeof IconButton>;

export { Playground } from './Playground.stories';
export { Showcase } from './Showcase.stories';
export { Size } from './Size.stories';
export { Label } from './Label.stories';
