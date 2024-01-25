const path = require('path');
module.exports = {
  cleanOutputDir: true,
  sourceLinkTemplate: 'http://source-url',
  tsconfig: path.join(__dirname, './tsconfig.json'),
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
};
