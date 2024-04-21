import { Preview } from '@storybook/react';
import DocsContainer from './layouts/DocsLayout';
import { Pagelayout } from './layouts/PageLayout';
import { storyDecorator } from './storyDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
    },
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: false },
    },
    docs: {
      container: DocsContainer,
      page: Pagelayout,
      source: { excludeDecorators: true },
    },
  },
  decorators: [storyDecorator],
};

export default preview;
