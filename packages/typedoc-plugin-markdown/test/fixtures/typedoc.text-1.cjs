// @ts-check

const baseOptions = require('./typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  pageTitleTemplates: {
    index: ':tada: Custom Index Title',
    member: '{name}',
  },
  textContentMappings: {
    'breadcrumb.index': 'Home',
    'header.title': 'My API -  {version}',
    'footer.text': 'Copyright Test',
  },
  lang: 'ja',
  locales: {
    ja: {
      theme_type: 'Type (ja)',
    },
  },
};
