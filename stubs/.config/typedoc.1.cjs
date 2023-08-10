const path = require('path');
module.exports = {
  ...require('./typedoc.base.cjs'),
  plugin: ['typedoc-plugin-markdown' /*'typedoc-plugin-remark'*/],
  /*remarkPlugins: [
    ['remark-github', { repository: 'https://github.com/tgreyuk/stub.git' }],
    'unified-prettier',
  ],*/
};
