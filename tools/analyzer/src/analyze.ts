import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  root,
  paragraph,
  text,
  heading,
  list,
  listItem,
  brk,
} from 'mdast-builder';

import { toMarkdown } from 'mdast-util-to-markdown';

import * as schema from 'custom-elements-manifest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot: string = path.join(__dirname, '../', '../', '../');

const getComponentDirectories = (): string[] => {
  const componentDir = path.join(projectRoot, 'components');
  return fs.readdirSync(componentDir).map((dir) => {
    return path.join(componentDir, dir);
  });
};

const getComponentCustomModulesManifest = (
  directory: string
): schema.Package | null => {
  if (fs.existsSync(path.join(directory, 'custom-elements.json'))) {
    return JSON.parse(
      fs.readFileSync(path.join(directory, 'custom-elements.json'), {
        encoding: 'utf8',
      })
    );
  }

  return null;
};
getComponentDirectories()
  .map((componentDirectory) =>
    getComponentCustomModulesManifest(componentDirectory)
  )
  .forEach((manifest) => {
    const components: any[] = [];

    manifest?.modules.forEach((module) => {
      console.log(module.declarations);
      components.push(heading(2, text(path.parse(module.path).base)));

      module.declarations?.forEach((declaration) => {
        components.push(heading(3, text(declaration.name)));
        if (declaration.kind === 'class' && declaration.superclass) {
          components.push(
            paragraph(
              text(
                `Parent: ${declaration.superclass.name} (${declaration.superclass.package})`
              )
            )
          );
        }
      });
    });
  });
