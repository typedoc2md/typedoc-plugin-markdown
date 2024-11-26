module.exports = {
  cleanOutputDir: true,
  sourceLinkTemplate: 'http://source-url',
  tsconfig: process.cwd() + '/test/fixtures/tsconfig.json',
  externalSymbolLinkMappings: {
    typedoc: {
      Application: 'https://typedoc.org/api/classes/Application.html',
    },
    typescript: {
      Promise:
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      URL: 'https://developer.mozilla.org/en-US/docs/Web/API/URL',
    },
  },
  /*outputs: [
    {
      name: 'html',
      path: './docs-html',
    },
    {
      name: 'markdown',
      path: './docs-markdown',
    },
  ],*/
  locales: {
    en: {
      theme_defined_in: 'Source',
    },
  },
};
