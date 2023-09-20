import path from 'path';
import fs from 'fs';

export const rootDir = path.join(__dirname, '../', '../', '../', '../');

export const getComponentNames = (): string[] => {
  return fs
    .readdirSync(path.join(rootDir, 'components'))
    .filter((componentName) =>
      fs.existsSync(
        path.join(rootDir, 'components', componentName, 'package.json')
      )
    );
};

export const getComponentDirs = (): string[] => {
  return getComponentNames().map((componentName) =>
    path.join(rootDir, 'components', componentName)
  );
};

export const readPackageJson = (componentDir: string): any => {
  return readJsonFile(path.join(componentDir, 'package.json'));
};

export const hasFile = (file: string): boolean => {
  return fs.existsSync(file);
};

export const readFile = (file: string): string => {
  return fs.readFileSync(file, { encoding: 'utf-8' });
};

export const readJsonFile = (file: string): any => {
  return JSON.parse(readFile(file));
};
