import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/**/*.mdx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    {
      name: '@storybook/adddon-essentials',
      options: {
        background: false,
      },
    },
    'storybook-addon-themes',
    'storybook-design-token',
    '@etchteam/storybook-addon-status/register',
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
};

export default config;
