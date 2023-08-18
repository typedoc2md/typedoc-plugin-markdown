const path = require('path');

module.exports = {
  ...require(path.join(__dirname, '../../stubs/.config/typedoc.base.cjs')),
  entryPoints: [path.join(__dirname, '../../stubs/src/comments.ts')],
  out: './out',
  outputFileStrategy: 'modules',
  plugin: ['typedoc-plugin-markdown', './dist'],
  remarkPlugins: ['remark-github'],
  readme: 'none',
};
