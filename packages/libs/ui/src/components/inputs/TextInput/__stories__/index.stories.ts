import type { Meta } from '@storybook/react';
import { TextInput } from '..';

export default {
  component: TextInput,
  title: 'UI/Inputs/TextInput',
} as Meta<typeof TextInput>;

export { Playground } from './Playground.stories';
export { Showcase } from './Showcase.stories';
