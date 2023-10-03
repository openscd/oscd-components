import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  names,
  updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { OscdComponentGeneratorSchema } from './schema';

export async function componentGenerator(
  tree: Tree,
  options: OscdComponentGeneratorSchema
) {
  const projectRoot = `components/${options.name}`;

  const contents = tree.read('CODEOWNERS').toString();

  const newContents = [contents, `/${projectRoot} ${options.codeOwner}`];

  tree.write('CODEOWNERS', newContents.join('\n'));

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
    scope: '@openscd',
    version: '0.0.1',
  };

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, model);

  await updateJson(tree, '.release-please-manifest.json', (rpm) => {
    rpm[`components/${model.selector}`] = model.version;

    return rpm;
  });

  await updateJson(tree, 'release-please-config.json', (rpc) => {
    rpc.packages[`components/${model.selector}`] = {
      component: `${model.scope}/${model.selector}`,
      'changelog-path': 'CHANGELOG.md',
      'release-type': 'node',
      'bump-minor-pre-major': false,
      'bump-patch-for-minor-pre-major': false,
      draft: false,
      prerelease: false,
      'initial-version': model.version,
    };

    return rpc;
  });

  await formatFiles(tree);
}

export default componentGenerator;
