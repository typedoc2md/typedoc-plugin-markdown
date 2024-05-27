// @ts-check

const baseOptions = require('../../../../devtools/packages/fixtures/typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  textContentMappings: {
    'header.title': 'My API - {version} (ko)',
    'header.docs': 'Docs (ko)',
    'footer.text': 'Copyright Test (ko)',
  },
  lang: 'ko',
  locales: {
    ko: {
      theme_type: 'Type (ko)',
    },
  },
};
