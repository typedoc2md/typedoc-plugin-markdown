const path = require('path');
module.exports = {
  ...require('./typedoc.base.cjs'),
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-frontmatter'],
  hideInPageTOC: false,
  propertiesFormat: 'table',
};
