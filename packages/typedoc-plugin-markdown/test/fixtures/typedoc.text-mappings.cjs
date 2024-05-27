// @ts-check

const baseOptions = require('../../../../devtools/packages/fixtures/typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  textContentMappings: {
    'header.title': 'My API -  {version}',
    'header.docs': 'API',
    'footer.text': 'Copyright Test',
    'title.indexPage': ':tada: Custom Index Title',
    'title.memberPage': '{name}',
  },
  locales: {
    en: {
      theme_index: 'TOC',
      kind_plural_interface: 'CoolInterfaces',
      kind_plural_variable: 'CoolVars',
    },
  },
};
