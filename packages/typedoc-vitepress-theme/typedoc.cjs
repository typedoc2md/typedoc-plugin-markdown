const path = require('path');

module.exports = {
  ...require(path.join(__dirname, '../../stubs/typedoc.cjs')),
  entryPoints: [path.join(__dirname, '../../stubs/src/groups/**/*.ts')],
  out: './out',
  outputFileStrategy: 'modules',
  plugin: ['typedoc-plugin-markdown', 'typedoc-vitepress-theme'],
};
