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

main();

async function main() {
  const allConfigs = fs.readdirSync(
    path.join(__dirname, '..', 'fixtures', 'configs'),
  );

  const devConfigs = ['customize.cjs'];

  const typedocConfigs = isDev ? devConfigs : allConfigs;

  consola.start(`[${getPackageName()}] Building test fixtures...`);

  const tasks = typedocConfigs.map((config) =>
    limit(() => processFixture(config)),
  );

  // Run all tasks and wait for completion
  await Promise.all(tasks);
}

export async function processFixture(config) {
  consola.info(`[${getPackageName()}] Building "${config}" fixture(s)`);

  const cmdArgs = [
    '-options',
    path.join(__dirname, '..', 'fixtures', 'configs', config),
  ];

  spawn('typedoc', cmdArgs, {
    stdio: 'inherit',
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
