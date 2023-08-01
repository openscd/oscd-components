import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../components/**/stories/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/stories/**/*.mdx',
  ],

  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        jsxOptions: {},
        csfPluginOptions: null,
        mdxPluginOptions: {},
        transcludeMarkdown: true,
      },
    },
    '@etchteam/storybook-addon-css-variables-theme',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
