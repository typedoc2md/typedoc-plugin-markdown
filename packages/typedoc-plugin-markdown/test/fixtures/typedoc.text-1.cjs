// @ts-check

const baseOptions = require('./typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  textContentMappings: {
    'breadcrumb.index': 'Home',
    'header.title': 'My API -  {version}',
    'footer.text': 'Copyright Test',
    'title.indexPage': ':tada: Custom Index Title',
    'title.memberPage': '{name}',
  },
  lang: 'jp',
  locales: {
    jp: {
      theme_type: 'Type (jp)',
    },
  },
};
