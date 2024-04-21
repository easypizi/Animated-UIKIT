import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../../../../packages/libs/*/src/**/__stories__/index.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    'storybook-addon-swc',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-toolbars",
    'storybook-dark-mode'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
