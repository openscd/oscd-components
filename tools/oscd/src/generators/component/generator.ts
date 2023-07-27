import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  names,
} from '@nx/devkit';
import * as path from 'path';
import { OscdComponentGeneratorSchema } from './schema';

export async function componentGenerator(
  tree: Tree,
  options: OscdComponentGeneratorSchema
) {
  const projectRoot = `components/${options.name}`;

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });

  const model = {
    name: options.name,
    selector: options.name,
    className: names(options.name).className,
    scope: '@oscd',
  };

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, model);

  await formatFiles(tree);
}

export default componentGenerator;
