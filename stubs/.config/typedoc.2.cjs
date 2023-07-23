module.exports = {
  ...require('./typedoc.base.cjs'),
  plugin: ['typedoc-plugin-markdown'],
  hideInPageTOC: false,
  indexPageTitle: 'Overview',
  identifiersAsCodeBlocks: true,
  propertiesFormat: 'table',
  enumMembersFormat: 'table',
  typeDeclarationFormat: 'table',
  readme: 'none',
  outputFileStrategy: 'modules',
};
