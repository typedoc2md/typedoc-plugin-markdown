const { Application } = require('typedoc');
const path = require('path');

global.stubsDirectory = './test/stubs/';
global.outputDirectory = './test/specs/out';

global.bootstrapApp = (options = {}) => {
  const app = new Application({
    module: 'CommonJS',
    target: 'ES5',
    logger: 'none',
    readme: 'none',
    theme: 'markdown',
    disableOutputCheck: true,
    plugin: path.join(__dirname, '../dist/index'),
    ...options,
  });
  return app;
};

global.getExpectedUrls = urlMappings => {
  const expectedUrls = [];
  urlMappings.forEach(urlMapping => {
    expectedUrls.push(urlMapping.url);
    urlMapping.model.children.forEach(reflection => {
      expectedUrls.push(reflection.url);
    });
  });
  return expectedUrls;
};

global.handlebarsHelpersOptionsStub = {
  fn: () => 'true',
  inverse: () => 'false',
  hash: {},
};
