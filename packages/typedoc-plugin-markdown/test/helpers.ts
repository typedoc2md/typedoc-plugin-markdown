import { assertToMatchSnapshot } from '@devtools/testing';
import * as fs from 'fs';
import * as path from 'path';

export function expectFileToEqual(
  key: string,
  outputFileStrategy: 'modules' | 'members' | ('modules' | 'members')[],
  file: string | string[],
  limit?: number,
  range?: Array<number>,
) {
  const outputFileStrategies = Array.isArray(outputFileStrategy)
    ? outputFileStrategy
    : [outputFileStrategy];
  outputFileStrategies.forEach((outputFileStrategy) => {
    const basePath = getOutputFileStrategyPath(key, outputFileStrategy);
    const optionDirs = fs.readdirSync(basePath);
    optionDirs.forEach((optionDir, index) => {
      const isArray = Array.isArray(file);
      if (index < file.length) {
        if (!limit || limit > index) {
          const fileName = isArray ? file[index] : file;

          const fullPath = path.join(basePath, optionDir, fileName);

          let actual = fs.readFileSync(fullPath).toString();
          if (range) {
            actual = actual.split('\n').slice(range[0], range[1]).join('\n');
          }

          assertToMatchSnapshot(
            `${key}/${key}.${outputFileStrategy}.${optionDir}.${fileName.toString().replace(/\//g, '-')}`,
            actual,
          );
        }
      }
    });
  });
}

export function expectUrlsToEqual(key, outDir, outputFileStrategies) {
  outputFileStrategies.forEach((outputFileStrategy) => {
    const basePath = getOutputFileStrategyPath(outDir, outputFileStrategy);
    const optionDirs = fs.readdirSync(basePath);
    optionDirs.forEach((optionDir) => {
      const optionsBasePath = path.join(basePath, optionDir);
      const rootDirectory = fs.readdirSync(path.join(basePath, optionDir));
      const reduceDirectory = (basePath, baseDirectory, directory) => {
        return directory.reduce((prev, item) => {
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
      const actual = JSON.stringify(urls, null, 2).toString();
      assertToMatchSnapshot(
        `${key}/${key}.${outputFileStrategy}.${optionDir}.${outDir.toString().replace(/\//g, '-')}`,
        actual,
      );
    });
  });
}

export function getOutDir() {
  return path.join(process.cwd(), 'test', 'fixtures', 'out');
}

export function expectDirToEqual(key, outDir) {
  const basePath = getPath(outDir);
  const rootDirectory = fs.readdirSync(path.join(basePath));
  const reduceDirectory = (basePath, baseDirectory, directory) => {
    return directory.reduce((prev, item) => {
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
      return [...prev, `${baseDirectory}/${item}`.replace(/^\/+/, '')];
    }, []);
  };
  const actual = reduceDirectory(basePath, '', rootDirectory).toString();
  assertToMatchSnapshot(
    `${key}/${outDir.toString().replace(/\//g, '-')}`,
    actual,
  );
}

function getPath(dir) {
  return path.join(process.cwd(), 'test', 'fixtures', 'out', dir);
}

function getOutputFileStrategyPath(key, outputFileStrategy) {
  const basePath = path.join(
    process.cwd(),
    'test',
    'fixtures',
    'out',
    'md',
    key,
    outputFileStrategy,
  );
  return basePath;
}
