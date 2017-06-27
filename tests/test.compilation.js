require('mocha');
const path = require('path');
const fs = require('fs');
const chai = require('chai');
const chaiFiles = require('chai-files');

const file = chaiFiles.file;
const expect = chai.expect;

const compiledDirRoot = 'tests/out';
const expectedDirRoot = 'tests/mocks';

chai.use(chaiFiles);

describe('Compile Default Markdown', () => {

  it('should compile index', () => {
    expectFileToEqualMock('README.md', 'default');
  });

  it('should compile modules', () => {
    expectOutputFilesToEqualMocks('modules', 'default');
  });

  it('should compile classes', () => {
    expectOutputFilesToEqualMocks('classes', 'default');
  });

  it('should compile interfaces', () => {
    expectOutputFilesToEqualMocks('interfaces', 'default');
  });

  it('should compile enums', () => {
    expectOutputFilesToEqualMocks('enums', 'default');
  });

});

describe('Compile Bitbucket Flavoured Markdown', () => {

  it('should compile index', () => {
    expectFileToEqualMock('README.md', 'bitbucket');
  });

  it('should compile modules', () => {
    expectOutputFilesToEqualMocks('modules', 'bitbucket');
  });

  it('should compile classes', () => {
    expectOutputFilesToEqualMocks('classes', 'bitbucket');
  });

  it('should compile interfaces', () => {
    expectOutputFilesToEqualMocks('interfaces', 'bitbucket');
  });

  it('should compile enums', () => {
    expectOutputFilesToEqualMocks('enums', 'bitbucket');
  });

});

describe('Compile Markdown To Single File', () => {

  it('should compile', () => {
    expectFileToEqualMock('API.md', 'outfile');
  });

});

function expectFileToEqualMock(fileName, testNum) {
  expect(file(`${compiledDirRoot}/${testNum}/${fileName}`)).to.equal(file(`${expectedDirRoot}/${testNum}/${fileName}`));
}

function expectOutputFilesToEqualMocks(ref, testNum) {
  const files = fs.readdirSync(path.join(__dirname, `/mocks/${testNum}/${ref}`));
  files.forEach((filename) => {
    if (!/^\..*/.test(filename)) {
      expectFileToEqualMock(`${ref}/${filename}`, testNum);
    }
  });
}
