#!/usr/bin/env ts-node

import { getPackageName } from '@devtools/helpers';
import { spawn } from 'child_process';
import { consola } from 'consola';
import * as fs from 'fs-extra';
import * as path from 'path';
import { Fixture } from './models';

const timeStart = new Date().getTime();

main();

async function main() {
  fs.removeSync(path.join(process.cwd(), 'test', 'fixtures', 'out'));

  const config: Record<string, Fixture> = await import(
    path.join(process.cwd(), process.argv[3])
  );

  const fixtureCount = Object.entries(config.default).reduce(
    (prev, curr) =>
      prev + curr[1].options.length * (curr[1].outputFileStragies?.length || 2),
    0,
  );

  consola.start(
    `[${getPackageName()}] Building ${fixtureCount} test fixtures...`,
  );

  Object.entries(config.default).forEach(([key, config]) => {
    const outputFileStrategies: ('members' | 'modules')[] =
      config.outputFileStrategies || ['members', 'modules'];
    outputFileStrategies.forEach((outputFileStrategy) => {
      config.options.forEach((optionGroup, index: number) => {
        const options = {
          outputFileStrategy,
          ...config.commonOptions,
          ...optionGroup,
        };
        writeMarkdown(
          key,
          config.entryPoints,
          outputFileStrategy,
          options,
          'opts-' + Number(index + 1),
        );
      });
    });
  });
}

function writeMarkdown(
  key: string,
  entryPoints: string[],
  outputFileStrategy: 'members' | 'modules',
  options: any,
  optionDir: string,
) {
  const fullPath = path.join(
    process.cwd(),
    'test',
    'fixtures',
    'out',
    key,
    outputFileStrategy,
    optionDir,
  );
  spawn(
    'typedoc',
    [
      ...[
        '-options',
        path.join(__dirname, 'typedoc.cjs'),
        '-logLevel',
        'Warn',
        '-entryPoints',
        [`${process.cwd()}/test/fixtures/src/${entryPoints}`],
        '-out',
        fullPath,
      ],
      ...objectToOptions(options),
    ],
    {
      stdio: 'inherit',
    },
  );
}

/*export function writeHtml(
  entryPoints: FixtureEntryPoints,
  outDir: FixtureOutputDir,
) {
  const fullpath = `./test/out/html/${outDir}`;
  spawn(
    'typedoc',
    [
      ...[
        '-options',
        `./stubs/typedoc.cjs`,
        '-logLevel',
        'Warn',
        '--media',
        './stubs/media',
        '--includes',
        './stubs/inc',
        '-entryPoints',
        `./stubs/${entryPoints}`,
        '-out',
        fullpath,
      ],
    ],
    {
      stdio: 'inherit',
    },
  );
}*/

function objectToOptions(obj: any) {
  return Object.entries(obj).reduce(
    (prev: any, curr: any) => {
      if (Array.isArray(curr[1])) {
        return [
          ...prev,
          ...curr[1].reduce((prev1, curr1) => {
            return [...prev1, ...[`-${curr[0]}`, curr1]];
          }, []),
        ];
      }
      if (typeof curr[1] === 'object') {
        return [
          ...prev,
          ...Object.entries(curr[1]).reduce((prev1: any, curr1: any) => {
            return [...prev1, ...[`-${curr[0]}.${curr1[0]}`, true]];
          }, []),
        ];
      }
      return [...prev, ...[`-${curr[0]}`, curr[1]]];
    },
    ['-plugin', 'typedoc-plugin-markdown'],
  );
}

process.on('exit', () => {
  consola.success(
    `[${getPackageName()}] Finished building fixtures in ${(
      (new Date().getTime() - timeStart) /
      1000
    ).toFixed(2)} seconds`,
  );
});
