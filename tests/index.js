require('mocha');
const path = require('path');
const fs = require('fs');
const chai = require('chai');
const chaiFiles = require('chai-files');
const file = chaiFiles.file;
const expect = chai.expect;
const compiledDir = 'tests/out/';
const expectedDir = 'tests/mocks/';

chai.use(chaiFiles);

describe('Compile Markdown:', () => {

  it('should compile index', () => {
    expectFile('index.md');
  });

  it('should compile modules', () => {

    const files = fs.readdirSync(path.join(__dirname, 'mocks/modules'));

    files.forEach((filename) => {
      if (!/^\..*/.test(filename)) {
        expectFile(`modules/${filename}`);
      }
    });

  });

  it('should compile classes', () => {

    const files = fs.readdirSync(path.join(__dirname, 'mocks/classes'));

    files.forEach((filename) => {
      if (!/^\..*/.test(filename)) {
        expectFile(`classes/${filename}`);
      }
    });

  });

  it('should compile interfaces', () => {

    const files = fs.readdirSync(path.join(__dirname, 'mocks/interfaces'));

    files.forEach((filename) => {
      if (!/^\..*/.test(filename)) {
        expectFile(`interfaces/${filename}`);
      }
    });

  });


  it('should compile enums', () => {

    const files = fs.readdirSync(path.join(__dirname, 'mocks/enums'));

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
