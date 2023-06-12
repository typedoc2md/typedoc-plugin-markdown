module.exports = {
  ...require('./typedoc.base.cjs'),
  plugin: ['typedoc-plugin-markdown'],
  entryPoints: ['../src/monorepo/packages/*'],
  name: 'Packages Example',
  entryPointStrategy: 'packages',
  includeVersion: true,
};
