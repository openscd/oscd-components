#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import StyleDictionary from 'style-dictionary';

interface Args {
  theme: string;
}

const args: Args = yargs(hideBin(process.argv))
  .options({
    theme: {
      type: 'string',
      default: 'oscd',
      demandOption: true,
    },
  })
  .parseSync();

const rootFolder = '../../';

const themeName = args.theme;

StyleDictionary.extend({
  source: [`${rootFolder}/themes/tokens/${themeName}/**/*.json`],
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
