import type { Meta } from '@storybook/react';
import { Button } from '..';

export default {
  component: Button,
  title: 'UI/Inputs/Button',
} as Meta<typeof Button>;

export { Playground } from './Playground.stories';
export { Showcase } from './Showcase.stories';
export { Variant } from './Variant.stories';
export { Size } from './Size.stories';
export { Icons } from './Icons.stories';
export { FullWidth } from './FullWidth.stories';
