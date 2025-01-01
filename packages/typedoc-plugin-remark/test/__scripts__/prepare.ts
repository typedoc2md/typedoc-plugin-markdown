import { spawn } from 'child_process';
import { consola } from 'consola';
import fs from 'fs-extra';

const timeStart = new Date().getTime();

consola.start(`Building test fixtures...`);

// remove output dir
fs.removeSync(`./test/out`);

const fixtures = [
  { options: 'typedoc.modules.json' },
  { options: 'typedoc.members.json' },
  { options: 'typedoc.toc.json' },
  { options: 'typedoc.globals.json' },
  { options: 'typedoc.globals-mdx.json' },
  { options: 'typedoc.globals-notoc.json' },
];

// write fixtures
fixtures.forEach((fixture) => {
  writeMarkdown(fixture);
});

function writeMarkdown(fixture: any) {
  spawn(
    'typedoc',
    [...['-options', `./test/${fixture.options}`, '-logLevel', 'Warn']],
    {
      stdio: 'inherit',
    },
  );
}
process.on('exit', () => {
  consola.success(
    `Finished building fixtures in ${(
      (new Date().getTime() - timeStart) /
      1000
    ).toFixed(2)} seconds`,
  );
});
