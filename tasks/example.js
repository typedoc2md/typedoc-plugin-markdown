const arg = require('arg');
const { green } = require('chalk');
const { join } = require('path');
const { Application } = require('typedoc');

const args = arg({
  '--platform': String,
  '-p': '--platform',
  '--theme': String,
  '-t': '--theme',
  '--out': String,
  '-o': '--out',
});

const theme = args['--theme'];
const platform = args['--platform'];
const out = args['--out'];

const app = new Application({
  mode: 'modules',
  module: 'CommonJS',
  target: 'ES5',
  name: 'My API',
  readme: 'none',
  includes: './test/stubs/inc/',
  media: './test/stubs/media/',
  theme,
  plugin: join(__dirname, '../dist/index'),
  experimentalDecorators: true,
  jsx: true,
  excludePrivate: true,
  listInvalidSymbolLinks: false,
});

const inputFiles = app.expandInputFiles(['./test/stubs']);
app.options.setValue('platform', platform);

app.generateDocs(inputFiles, join(__dirname, `../out/${out}`));
console.log(green(`[typedoc-plugin-markdown:task:examples] writing ${theme} ${platform}`));
