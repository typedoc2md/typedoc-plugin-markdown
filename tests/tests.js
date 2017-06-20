require('mocha');
const path = require('path');
const fs = require('fs');
const chai = require('chai');
const chaiFiles = require('chai-files');
const file = chaiFiles.file;
const expect = chai.expect;
const compiledDir = 'tests/compiled/';
const expectedDir = 'tests/expected/';

chai.use(chaiFiles);

describe('Compilation', () => {

  var typedoc = require('typedoc');
  const app = new typedoc.Application({
    theme: 'markdown',
    tsconfig: 'tests/src/tsconfig.json',
    out: 'tests/compiled',
    readme: 'none'
  });

  const result = app.options.read(app.options.getRawValues());
  const src = app.expandInputFiles(result.inputFiles);
  const project = app.convert(src);
  app.generateDocs(project, app.options.getRawValues().out);

  it('should compile index', () => {
    expectFile('index.md');
  });

  it('should compile modules', () => {

    const files = fs.readdirSync(path.join(__dirname, 'expected/modules'));

    files.forEach((filename) => {
      if (!/^\..*/.test(filename)) {
        expectFile(`modules/${filename}`);
      }
    });

  });

  it('should compile classes', () => {

    const files = fs.readdirSync(path.join(__dirname, 'expected/classes'));

    files.forEach((filename) => {
      if (!/^\..*/.test(filename)) {
        expectFile(`classes/${filename}`);
      }
    });

  });

  it('should compile interfaces', () => {

    const files = fs.readdirSync(path.join(__dirname, 'expected/interfaces'));

    files.forEach((filename) => {
      if (!/^\..*/.test(filename)) {
        expectFile(`interfaces/${filename}`);
      }
    });

  });


  it('should compile enums', () => {

    const files = fs.readdirSync(path.join(__dirname, 'expected/enums'));

    files.forEach((filename) => {
      if (!/^\..*/.test(filename)) {
        expectFile(`enums/${filename}`);
      }
    });

  });

});

function expectFile(fileName) {
  expect(file(`${compiledDir}${fileName}`)).to.equal(file(`${expectedDir}${fileName}`));
}
