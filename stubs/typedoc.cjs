const path = require('path');
module.exports = {
  cleanOutputDir: true,
  githubPages: false,
  sourceLinkTemplate: 'http://source-url',
  tsconfig: path.join(__dirname, './tsconfig.json'),
  externalSymbolLinkMappings: {
    typedoc: {
      Application: 'https://typedoc.org/api/classes/Application.html',
    },
  },
};
