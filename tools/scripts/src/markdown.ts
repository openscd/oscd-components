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
];

const res = tsMarkdown(readme);

fs.writeFileSync(path.join(rootDir, 'README-new.md'), res, {
  encoding: 'utf8',
});
