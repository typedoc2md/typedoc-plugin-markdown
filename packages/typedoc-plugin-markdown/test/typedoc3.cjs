const path = require('path');
module.exports = {
  ...require('./typedoc.cjs'),
  plugin: ['typedoc-plugin-markdown'],
  propertiesFormat: 'table',
  namedAnchors: true,
};
