import { spawn } from 'child_process';
import { consola } from 'consola';
import fs from 'fs-extra';
import pLimit from 'p-limit';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const limit = pLimit(5);

const timeStart = new Date().getTime();

main();

async function main() {
  const outPath = path.join(process.cwd(), 'test', 'fixtures', 'out');

  fs.removeSync(outPath);

  const config = await import(path.join(process.cwd(), process.argv[3]));

  const fixtures = Object.entries(config.default);

  const filtered = fixtures.filter(([, config]) => {
    return config.only;
  });

  const fixturesToBuild = filtered.length ? filtered : fixtures;

  const fixtureCount = fixturesToBuild.reduce(
    (prev, curr) =>
      prev +
      curr[1].options.length * (curr[1].outputFileStrategies?.length || 2),
    0,
  );

  consola.start(
    `[${getPackageName()}] Building ${fixtureCount} test fixtures...`,
  );

  // Create tasks for each fixture with limited concurrency
  const tasks = fixturesToBuild.map(([key, config]) =>
    limit(() => processFixture(key, config)),
  );

  // Run all tasks and wait for completion
  await Promise.all(tasks);
}

async function processFixture(key, config) {
  consola.info(`[${getPackageName()}] Building "${key}" fixture(s)`);
  const outputFileStrategies = config.outputFileStrategies || [
    'members',
    'modules',
  ];

  //writeHtml(key, config.entryPoints);
  outputFileStrategies.forEach((outputFileStrategy) => {
    config.options.forEach((optionGroup, index) => {
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
}

function writeMarkdown(
  key,
  entryPoints,
  outputFileStrategy,
  options,
  optionDir,
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

  const mdProcess = spawn(
    'typedoc',
    [
      ...[
        '-options',
        path.join(__dirname, '..', 'fixtures', 'typedoc.cjs'),
        '-logLevel',
        'None',
        '-out',
        fullPath,
      ],
      ...toEntryPoints(entryPoints),
      ...objectToOptions(options),
    ],
    {
      stdio: 'pipe',
    },
  );

  mdProcess.on('close', (code) => {
    if (code !== 0) {
      consola.error(
        `[${getPackageName()}] ${key} Fixture "${key}" exited with code ${code}.`,
      );
    }
  });

  mdProcess.on('error', (err) => {
    consola.error(
      `[${getPackageName()}] Fixture "${key}" error occurred ${err.message}`,
    );
  });
}

export function writeHtml(key, entryPoints) {
  const fixturesRoot = path.join(
    __dirname,
    '../../../packages/typedoc-plugin-markdown/test/fixtures',
  );
  const fullPath = path.join(
    process.cwd(),
    'test',
    'fixtures',
    'out',
    'html',
    key,
  );
  spawn(
    'typedoc',
    [
      ...[
        '-options',
        path.join(__dirname, 'typedoc.cjs'),
        '-logLevel',
        'None',
        '-out',
        fullPath,
        '-readme',
        'none',
        '-projectDocuments',
        path.join(fixturesRoot, 'PROJECT_DOC_1.md'),
        '-projectDocuments',
        path.join(fixturesRoot, 'docs/project/PROJECT_DOC_2.md'),
        '-projectDocuments',
        path.join(fixturesRoot, 'docs/project/PROJECT_DOC_3.md'),
        //'-plugin',
        //path.join(__dirname, '../../typedoc-plugins/typedoc-default-values.js'),
      ],
      ...toEntryPoints(entryPoints),
    ],
    {
      stdio: 'inherit',
    },
  );
}

function toEntryPoints(entryPoints) {
  if (Array.isArray(entryPoints)) {
    return entryPoints.reduce((prev, curr) => {
      return [
        ...prev,
        ...[`--entryPoints`, `${process.cwd()}/test/fixtures/src/${curr}`],
      ];
    }, []);
  }
  return ['--entryPoints', `${process.cwd()}/test/fixtures/src/${entryPoints}`];
}

function objectToOptions(obj) {
  return Object.entries(obj).reduce(
    (prev, curr) => {
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
          ...Object.entries(curr[1]).reduce((prev1, curr1) => {
            return [...prev1, ...[`-${curr[0]}.${curr1[0]}`, curr1[1]]];
          }, []),
        ];
      }
      return [...prev, ...[`-${curr[0]}`, curr[1]]];
    },
    [
      '-plugin',
      'typedoc-plugin-markdown',
      //'-plugin',
      //path.join(__dirname, '../../typedoc-plugins/typedoc-default-values.js'),
    ],
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

function getPackageName() {
  const cwdParts = process.cwd().split(path.sep);
  return cwdParts[cwdParts.length - 1];
}
