module.exports = {
  ...require('./typedoc.base'),
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-mdn-links'],
  hideInPageTOC: false,
  indexPageTitle: 'Overview',
  identifiersAsCodeBlocks: true,
  propertiesFormat: 'table',
  enumMembersFormat: 'table',
  typeDeclarationFormat: 'table',
  readme: 'none',
  outputFileStrategy: 'modules',
  excludeGroups: true,
};
