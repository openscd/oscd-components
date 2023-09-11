import path from 'path';
import fs from 'fs';
import { getComponentDirs, getComponentNames, rootDir } from './utils/utils';
import { Project, ScriptTarget } from 'ts-morph';
import { cwd } from 'process';

const getFiles = (dir: string, files: string[] = []): string[] => {
  const fileList = fs.readdirSync(dir);

  fileList.forEach((file) => {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(dir, files);
    } else {
      files.push(name);
    }
  });

  return files;
};

const project = new Project({
  compilerOptions: {
    target: ScriptTarget.ESNext,
  },
});

getComponentNames().forEach((componentName) => {
  const project = new Project({
    tsConfigFilePath: `../../components/${componentName}/tsconfig.json`,
  });

  project
    .getSourceFiles()
    .flatMap((sourceFile) => sourceFile.getClasses())

    .forEach((clazz) => {
      console.log(clazz.getName());
      clazz
        .getInstanceProperties()
        .filter((instanceProperty) => instanceProperty.getDecorator('property'))
        .forEach((instanceProperty) => {
          console.log(instanceProperty.getName());

          const comment = instanceProperty
            .getLeadingCommentRanges()
            .map((cr) => cr.getText().trim())
            .map((line) => line.trim())
            .map((line) => line.replace(`\t`, ''))
            .join('');

          console.log(comment);
        });
    });
});

/*
getComponentDirs().forEach((componentDir) => {
  console.log(componentDir);

  const srcDir: string = path.join(componentDir, 'src');

  //const sourceFiles = project.getSourceFiles(`${srcDir}/**ts`);

  //console.log(sourceFiles);
});

*/
