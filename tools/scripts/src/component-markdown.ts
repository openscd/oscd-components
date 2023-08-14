import path from 'path';
import fs from 'fs';

import {
  tsMarkdown,
  MarkdownEntryOrPrimitive,
  TableEntry,
  H1Entry,
  ImageEntry,
} from 'ts-markdown';
import { getComponentDirs, readPackageJson, hasFile } from './utils/utils';
import { readJsonFile } from '@nx/devkit';

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

const getScreenshotImage = (customElement: any): ImageEntry => {
  return {
    img: {
      source: path.join(
        'screenshots',
        'Chromium',
        'baseline',
        `${customElement.tagName}.png`
      ),
      alt: customElement.tagName,
    },
  };
};

const generateCustomElementSection = (
  customElement: any,
  packageJson: any
): MarkdownEntryOrPrimitive[] => {
  return [
    generateHeader(customElement, packageJson.version),
    {
      hr: true,
    },
    getScreenshotImage(customElement),
    {
      h2: 'Attributes',
    },
    generateAttributesTable(customElement),
    {
      h2: 'Css Properties',
    },
    generateCssPropertiesTable(customElement),
  ];
};

const generateHeader = (customElement: any, version: string): H1Entry => {
  return {
    h1: `\`<${customElement.tagName}>\` ![NPM](https://img.shields.io/badge/NPM-${version}-cb0001)`,
  };
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
    generateCustomElementSection(customElement, packageJson)
  );

  const res = tsMarkdown(readme);

  fs.writeFileSync(path.join(componentDir, 'README-new.md'), res, {
    encoding: 'utf8',
  });
};

getComponentDirs().forEach((componentDir) => generateReadme(componentDir));
