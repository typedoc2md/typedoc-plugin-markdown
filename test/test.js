require('mocha');
const path = require('path');
const fs = require('fs');
const chai = require('chai');
const chaiFiles = require('chai-files');

const file = chaiFiles.file;
const expect = chai.expect;

const compiledDirRoot = 'test/out';
const expectedDirRoot = 'test/fixtures';

chai.use(chaiFiles);

describe(`Compile 'github' flavoured markdown`, () => {
  compareOutputToMocks('github');
});

describe(`Compile 'bitbucket' flavoured markdown`, () => {
  compareOutputToMocks('bitbucket');
});

describe(`Compile 'gitbook' flavoured markdown`, () => {
  compareOutputToMocks('gitbook');
  it('should compile summary', () => {
    expectFileToEqualMock('SUMMARY.md', 'gitbook');
  });
});

function compareOutputToMocks(flavour) {

  it('should compile home', () => {
    expectFileToEqualMock('README.md', flavour);
  });

  it('should compile modules', () => {
    expectOutputFilesToEqualMocks('modules', flavour);
  });

  it('should compile classes', () => {
    expectOutputFilesToEqualMocks('classes', flavour);
  });

  it('should compile interfaces', () => {
    expectOutputFilesToEqualMocks('interfaces', flavour);
  });

  it('should compile enums', () => {
    expectOutputFilesToEqualMocks('enums', flavour);
  });
}

function expectFileToEqualMock(fileName, testNum) {
  expect(file(`${compiledDirRoot}/${testNum}/${fileName}`)).to.equal(file(path.join(__dirname, '..', `${expectedDirRoot}/${testNum}/${fileName}`)));
}

function expectOutputFilesToEqualMocks(ref, testNum) {
  const files = fs.readdirSync(path.join(__dirname, '..', `${expectedDirRoot}/${testNum}/${ref}`));
  files.forEach((filename) => {
    if (!/^\..*/.test(filename)) {
      expectFileToEqualMock(`${ref}/${filename}`, testNum);
    }
  });
}
