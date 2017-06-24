const path = require('path');
const fs = require('fs');
const chai = require('chai');
const chaiFiles = require('chai-files');
const typedoc = require('typedoc');
const config = require('./config.markdown');

require('mocha');
chai.use(chaiFiles);

const file = chaiFiles.file;
const expect = chai.expect;

const compiledDir = 'tests/out/test1/';
const expectedDir = 'tests/mocks/test1/';

describe('Compile Markdown', () => {

  it('should compile markdown', () => {
    console.log('config', config);
    const app = new typedoc.Application(config);
    const result = app.options.read(app.options.getRawValues());
    const src = app.expandInputFiles(result.inputFiles);
    const project = app.convert(src);
    app.generateDocs(project, app.options.getRawValues().out);
  });

  it('should compile index', () => {
    expectFileToEqualMock('index.md');
  });

  it('should compile modules', () => {
    expectOutputFilesToEqualMocks('modules');
  });

  it('should compile classes', () => {
    expectOutputFilesToEqualMocks('classes');
  });

  it('should compile interfaces', () => {
    expectOutputFilesToEqualMocks('interfaces');
  });

  it('should compile enums', () => {
    expectOutputFilesToEqualMocks('enums');
  });

});

function expectFileToEqualMock(fileName) {
  expect(file(`${compiledDir}${fileName}`)).to.equal(file(`${expectedDir}${fileName}`));
}

function expectOutputFilesToEqualMocks(ref) {
  const files = fs.readdirSync(path.join(__dirname, `/mocks/test1/${ref}`));
  files.forEach((filename) => {
    if (!/^\..*/.test(filename)) {
      expectFileToEqualMock(`${ref}/${filename}`);
    }
  });
}
