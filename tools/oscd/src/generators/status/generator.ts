import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  names,
  updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { env } from 'process';
import { OscdStatusGeneratorSchema } from './schema';

export async function statusGenerator(
  tree: Tree,
  options: OscdStatusGeneratorSchema
) {
  await updateJson(
    tree,
    path.join('components', options.project, 'package.json'),
    (pckgJson) => {
      if (!Object.keys(pckgJson).includes('oscd')) {
        pckgJson['oscd'] = {};
      }

      pckgJson['oscd'].status = options.status;

      return pckgJson;
    }
  );

  await formatFiles(tree);
}

export default statusGenerator;
