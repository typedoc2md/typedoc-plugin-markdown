// @ts-check

const baseOptions = require('../../../../devtools/packages/fixtures/typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  textContentMappings: {
    'header.title': 'My API - {version} (jp)',
    'header.docs': 'Docs (jp)',
    'footer.text': 'Copyright Test (jp)',
  },
  lang: 'jp',
  locales: {
    jp: {
      theme_type: 'Type (jp)',
    },
  },
};
