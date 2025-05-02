module.exports = {
  cleanOutputDir: true,
  sourceLinkTemplate: 'http://source-url',
  tsconfig: process.cwd() + '/test/fixtures/tsconfig.json',
  navigationLinks: {
    'Fixtures Home': process.cwd() + '/test/fixtures/out/',
  },
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
  logLevel: 'Warn',
};
