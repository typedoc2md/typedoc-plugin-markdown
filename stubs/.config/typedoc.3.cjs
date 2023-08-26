const path = require('path');
module.exports = {
  ...require('./typedoc.base.cjs'),
  plugin: ['typedoc-plugin-markdown'],
  entryPoints: [path.join(__dirname, '../src/monorepo/packages/*')],
  name: 'Packages Example',
  entryPointStrategy: 'packages',
  includeVersion: true,
};
