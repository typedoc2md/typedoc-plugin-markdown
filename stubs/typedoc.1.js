module.exports = {
  ...require('./typedoc.base'),
  plugin: ['typedoc-plugin-markdown'],
  outputFileStrategy: 'members',
  hideGenerator: true,
  tocFormat: 'table',
};
