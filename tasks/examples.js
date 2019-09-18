const spawn = require('cross-spawn');
const options = { stdio: 'inherit' };
const { join } = require('path');

const args = [
  './test/stubs/src',
  '--tsconfig',
  './test/stubs/tsconfig.json',
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

const argsWithPlugin = [...args, ...['--plugin', join(__dirname, '../dist/index.js')]];

spawn('typedoc', [...args, ...['--out', 'out/default']], options);
spawn('typedoc', [...argsWithPlugin, ...['--out', 'out/markdown']], options);
spawn('typedoc', [...argsWithPlugin, ...['--theme', 'docusaurus', '--out', 'out/docusaurus/docs/myapi']], options);
spawn('typedoc', [...argsWithPlugin, ...['--theme', 'docusaurus2', '--out', 'out/docusaurus2/docs/myapi']], options);
spawn('typedoc', [...argsWithPlugin, ...['--theme', 'bitbucket', '-out', 'out/bitbucket/docs']], options);
spawn('typedoc', [...argsWithPlugin, ...['--theme', 'gitbook', '-out', 'out/gitbook/docs']], options);
