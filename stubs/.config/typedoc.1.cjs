const path = require('path');
module.exports = {
  ...require('./typedoc.base.cjs'),
  plugin: [
    'typedoc-plugin-markdown',
    'typedoc-plugin-frontmatter',
    'typedoc-plugin-mdn-links',
  ],
  hideInPageTOC: false,
  propertiesFormat: 'table',
};
