import * as fs from 'fs';
import * as path from 'path';
import { MarkdownTheme } from '../../src/theme';
import { FixtureOutputDir, FixtureOutputFileStrategy } from './config';

export class MockMarkdownTheme {}

export const mockMarkdownThemeInstance =
  new MockMarkdownTheme() as MarkdownTheme;

export function expectFileToEqual(
  outDir: FixtureOutputDir,
  outputFileStrategy: FixtureOutputFileStrategy | FixtureOutputFileStrategy[],
  file: string | string[],
  limit?: number,
) {
  const outputFileStrategies = Array.isArray(outputFileStrategy)
    ? outputFileStrategy
    : [outputFileStrategy];
  outputFileStrategies.forEach((outputFileStrategy) => {
    const basePath = getBasePath(outDir, outputFileStrategy);
    const optionDirs = fs.readdirSync(basePath);
    optionDirs.forEach((optionDir, index) => {
      const isArray = Array.isArray(file);
      if (index < file.length) {
        if (!limit || limit > index) {
          const fullPath = path.join(
            basePath,
            optionDir,
            isArray ? file[index] : file,
          );
          const actual = fs.readFileSync(fullPath).toString();
          expect(actual).toMatchSnapshot(
            `(Output File Strategy "${outputFileStrategy}") (Option Group "${
              index + 1
            }")`,
          );
        }
      }
    });
  });
}

export function expectUrlsToEqual(
  outDir: FixtureOutputDir,
  outputFileStrategies: FixtureOutputFileStrategy[],
) {
  outputFileStrategies.forEach((outputFileStrategy) => {
    const basePath = getBasePath(outDir, outputFileStrategy);
    const optionDirs = fs.readdirSync(basePath);
    optionDirs.forEach((optionDir) => {
      const optionsBasePath = path.join(basePath, optionDir);
      const rootDirectory = fs.readdirSync(path.join(basePath, optionDir));
      const reduceDirectory = (
        basePath: string,
        baseDirectory: string,
        directory: string[],
      ) => {
        return directory.reduce((prev: any, item) => {
          if (fs.lstatSync(`${basePath}/${item}`).isDirectory()) {
            const nestedDir = fs.readdirSync(`${basePath}/${item}`);
            return [
              ...prev,
              ...reduceDirectory(
                `${basePath}/${item}`,
                `${baseDirectory}/${item}`,
                nestedDir,
              ),
            ];
          }
          if (path.extname(item) === '.json') {
            return prev;
          }
          return [...prev, `${baseDirectory}/${item}`.replace(/^\/+/, '')];
        }, []);
      };
      const urls = reduceDirectory(optionsBasePath, '', rootDirectory);
      expect(urls).toMatchSnapshot(`outputFileStrategy: ${outputFileStrategy}`);
    });
  });
}

function getBasePath(
  outDir: FixtureOutputDir,
  outputFileStrategy: FixtureOutputFileStrategy,
) {
  const basePath = path.join(
    __dirname,
    '..',
    'out',
    outDir,
    outputFileStrategy,
  );

  return basePath;
}
