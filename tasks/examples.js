const spawn = require('cross-spawn');
const options = { stdio: 'inherit' };
const { join } = require('path');

const args = [
  './test/stubs',
  '--plugin',
  join(__dirname, '../dist/index.js'),
  '--target',
  'ES5',
  '--name',
  'My API',
  '--readme',
  'none',
  '--includes',
  './test/stubs/inc/',
  '--media',
  './test/stubs/media/',
];

spawn('typedoc', ['./test/stubs', '-out', 'out/default'], options);
spawn('typedoc', [...args, ...['--theme', 'markdown', '--out', 'out/markdown']], options);
spawn('typedoc', [...args, ...['--theme', 'docusaurus', '--out', 'out/docusaurus/docs/myapi']], options);
spawn('typedoc', [...args, ...['--theme', 'bitbucket', '-out', 'out/bitbucket/docs']], options);
spawn('typedoc', [...args, ...['--theme', 'gitbook', '-out', 'out/gitbook/docs']], options);
