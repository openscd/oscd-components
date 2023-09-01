import path from 'path';
import fs from 'fs';

import {
  tsMarkdown,
  MarkdownEntryOrPrimitive,
  TableEntry,
  H1Entry,
} from 'ts-markdown';

import { readJsonFile } from '@nx/devkit';

import {
  getComponentDirs,
  readPackageJson,
  hasFile,
  readFile,
} from './utils/utils';

const getCustomElements = (componentDir: string): any[] => {
  const customElementsJsonPath = path.join(
    componentDir,
    'custom-elements.json'
  );
  if (hasFile(customElementsJsonPath)) {
    const customElementsJson = readJsonFile(customElementsJsonPath);
    return customElementsJson.modules
      .flatMap((module: any) => module.declarations)
      .filter((declaration: any) => declaration.kind === 'class')
      .filter((declaration: any) => declaration.customElement);
  }
  return [];
};

const generateCustomElementSection = (
  componentDir: string,
  customElement: any,
  packageJson: any
): MarkdownEntryOrPrimitive[] => {
  return [
    generateHeader(customElement, packageJson.version, packageJson.oscd.status),
    {
      hr: true,
    },
    getIntro(componentDir),
    {
      text: '',
    },
    {
      h2: 'Example',
    },
    getExample(componentDir),
    {
      hr: true,
    },
    {
      h3: 'Attributes',
    },
    generateAttributesTable(customElement),
    {
      h3: 'Css Properties',
    },
    generateCssPropertiesTable(customElement),
  ];
};

const generateHeader = (
  customElement: any,
  version: string,
  status: string
): H1Entry => {
  const color: string =
    status === 'stable'
      ? '66bf3b'
      : status === 'beta'
      ? 'ea9e08'
      : status === 'WIP'
      ? '3b72bf'
      : status === 'deprecated'
      ? 'bf3b3b'
      : 'ababab';

  return {
    h1: `\`<${customElement.tagName}>\` ![NPM](https://img.shields.io/badge/NPM-${version}-cb0001) ![Status](https://img.shields.io/badge/${status}-${color})`,
  };
};

const getIntro = (componentDir: string): string => {
  const file: string = path.join(componentDir, 'INTRO.md');

  return hasFile(file) ? readFile(file) : '';
};

const getExample = (componentDir: string): string => {
  const file: string = path.join(componentDir, 'EXAMPLE.md');

  return hasFile(file) ? readFile(file) : '';
};

const generateAttributesTable = (customElement: any): TableEntry => {
  return {
    table: {
      rows: (customElement.attributes || []).map((attribute: any) => {
        return [
          attribute.name,
          attribute.type?.text || '',
          attribute.description || '',
        ];
      }),
      columns: ['Name', 'Type', 'Description'],
    },
  };
};

const generateCssPropertiesTable = (customElement: any): TableEntry => {
  return {
    table: {
      rows: (customElement.cssProperties || []).map((property: any) => {
        return [
          property['name'],
          property['default'] || '',
          property['description'] || '',
        ];
      }),
      columns: ['Name', 'Default', 'Description'],
    },
  };
};

const generateReadme = (componentDir: string): void => {
  const packageJson = readPackageJson(componentDir);
  const readme: MarkdownEntryOrPrimitive[] = getCustomElements(
    componentDir
  ).flatMap((customElement) =>
    generateCustomElementSection(componentDir, customElement, packageJson)
  );

  const res = tsMarkdown(readme);

  fs.writeFileSync(path.join(componentDir, 'README.md'), res, {
    encoding: 'utf8',
  });
};

getComponentDirs().forEach((componentDir) => generateReadme(componentDir));
