import path from 'path';

import StyleDictionary from 'style-dictionary';

const rootFolder = '../../';

const themeName = 'oscd';

StyleDictionary.extend({
  source: [`${rootFolder}/themes/tokens/**/*.json`],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: `${rootFolder}/themes/built/${themeName}/`,
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: `${rootFolder}/themes/built/${themeName}/`,
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: `${rootFolder}/themes/built/${themeName}/`,
      files: [
        {
          format: 'javascript/es6',
          destination: 'variables.js',
        },
      ],
    },
  },
}).buildAllPlatforms();
