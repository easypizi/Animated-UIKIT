import type { Meta } from '@storybook/react';
import { FileInput } from '../FileInput';

export default {
  component: FileInput,
  title: 'UI/Inputs/FileInput',
} as Meta<typeof FileInput>;

export { Playground } from './Playground.stories';
export { Showcase } from './Showcase.stories';
export { Upload } from './Upload.stories';
export { Providers } from './Providers.stories';
