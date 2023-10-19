import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/**/*.mdx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    {
      name: '@storybook/adddon-essentials',
      options: {
        background: false,
      },
    },
    '@etchteam/storybook-addon-status/register',
    'storybook-addon-root-attribute/register',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },
};

export default config;
