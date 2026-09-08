import { spawn } from 'child_process';
import { consola } from 'consola';
import * as fs from 'fs';
import pLimit from 'p-limit';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const args = process.argv.slice(2);

const isCI = args.includes('-isCI');
const isDev = args.includes('-isDEV');

const limit = pLimit(isCI ? 5 : 10);

const timeStart = new Date().getTime();

/**
 * The `merge` strategy reads a project JSON rather than source files, so the
 * fixture that writes that JSON has to finish before the one that merges it
 * starts. Every other fixture is independent and stays fully parallel.
 */
const MERGE_CHAIN = ['merge-json.cjs', 'merge.cjs'];

main();

async function main() {
  const allConfigs = fs.readdirSync(
    path.join(__dirname, '..', 'fixtures', 'configs'),
  );

  const devConfigs = ['reflections-1.cjs'];

  const typedocConfigs = isDev
    ? devConfigs
    : allConfigs.filter((config) => !MERGE_CHAIN.includes(config));

  consola.start(`[${getPackageName()}] Building test fixtures...`);

  const tasks = typedocConfigs.map((config) =>
    limit(() => processFixture(config)),
  );

  if (!isDev) {
    tasks.push(
      limit(async () => {
        for (const config of MERGE_CHAIN) {
          await processFixture(config, { wait: true });
        }
      }),
    );
  }

  // Run all tasks and wait for completion
  await Promise.all(tasks);
}

export async function processFixture(config, { wait = false } = {}) {
  consola.info(`[${getPackageName()}] Building "${config}" fixture(s)`);

  const cmdArgs = [
    '-options',
    path.join(__dirname, '..', 'fixtures', 'configs', config),
  ];

  const child = spawn('typedoc', cmdArgs, {
    stdio: 'inherit',
  });

  if (!wait) {
    return;
  }

  await new Promise((resolve, reject) => {
    child.on('error', reject);
    child.on('exit', (code) =>
      code === 0
        ? resolve()
        : reject(new Error(`"${config}" fixture exited with code ${code}`)),
    );
  });
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
