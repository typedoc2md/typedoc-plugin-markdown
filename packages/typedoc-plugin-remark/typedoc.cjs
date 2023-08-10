const path = require('path');

module.exports = {
  ...require(path.join(__dirname, '../../stubs/.config/typedoc.base.cjs')),
  entryPoints: [path.join(__dirname, '../../stubs/src/comments.ts')],
  out: './out',
  outputFileStrategy: 'modules',
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-frontmatter', './dist'],
  remarkPlugins: ['remark-github', 'unified-prettier'],
  frontmatterGlobals: { author: 'Joe Bloggs' },
  readme: 'none',
};
