module.exports = {
  ...require('./typedoc.base'),
  plugin: ['typedoc-plugin-markdown'],
  hideInPageTOC: true,
  indexPageTitle: 'Overview',
  indentifiersAsCodeBlocks: true,
  propertiesFormat: 'table',
  enumMembersFormat: 'table',
  readme: 'none',
  outputFileStrategy: 'modules',
  excludeGroups: true,
};
