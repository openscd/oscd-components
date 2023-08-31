import path from 'path';
import fs from 'fs';

import { tsMarkdown, MarkdownEntryOrPrimitive, TableEntry } from 'ts-markdown';
import { getComponentDirs, readPackageJson, rootDir } from './utils/utils';

const generateComponentsTable = (): TableEntry => {
  return {
    table: {
      columns: ['Name', 'Status', 'Version'],
      rows: getComponentDirs().map((componentDir) => {
        const pckgJson = readPackageJson(componentDir);

        return [
          {
            link: {
              href: `./components/${componentDir}/README.md`,
              text: pckgJson.name,
            },
          },
          pckgJson['oscd'].status || '-',
          pckgJson.version,
        ];
      }),
    },
  };
};

const generateScriptsTable = (): TableEntry => {
  return {
    table: {
      columns: ['Name', 'Description', 'Properties'],
      rows: [
        ['npm run generate:component', 'Scaffolds a new component', 'See CLI'],
        [
          'npx nx storybook <component>',
          'Run Storybook for a specific component',
          'component',
        ],
        ['npm run build:all', 'Builds all the components', '-'],
        [
          'npx nx graph',
          'Creates a visual graph for all the component dependencies',
          '-',
        ],
        [
          'npm run documentation',
          'Updates the documentation per component and the global README.md',
          '-',
        ],
      ],
    },
  };
};

const readme: MarkdownEntryOrPrimitive[] = [
  {
    h1: 'Oscd Components',
  },
  {
    p: 'Oscd Components are the building blocks to create an OpenSCD Plugin. OSCD Components are custom WebComponents built in Lit, accessable in any modern browser',
  },
  {
    blockquote: 'Check out the getting started guide or the documentation',
  },
  {
    hr: true,
  },
  {
    h2: 'Components',
  },
  {
    p: '',
  },
  generateComponentsTable(),
  {
    hr: true,
  },
  {
    h2: 'Scripts',
  },
  {
    p: '',
  },
  generateScriptsTable(),
];

const res = tsMarkdown(readme);

fs.writeFileSync(path.join(rootDir, 'README.md'), res, {
  encoding: 'utf8',
});
