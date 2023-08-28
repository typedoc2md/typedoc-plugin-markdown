const path = require('path');
module.exports = {
  ...require('./typedoc.cjs'),
  plugin: ['typedoc-plugin-markdown'],
  identifiersAsCodeBlocks: true,
};
