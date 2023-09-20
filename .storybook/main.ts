import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../components/**/stories/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/stories/**/*.mdx',
    '../stories/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.mdx',
  ],
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
    '@whitespace/storybook-addon-html',
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
