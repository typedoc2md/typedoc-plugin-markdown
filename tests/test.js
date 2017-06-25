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

describe('Compile Markdown', () => {

  it('should compile index', () => {
    expectFileToEqualMock('index.md', 'test1');
  });

  it('should compile modules', () => {
    expectOutputFilesToEqualMocks('modules', 'test1');
  });

  it('should compile classes', () => {
    expectOutputFilesToEqualMocks('classes', 'test1');
  });

  it('should compile interfaces', () => {
    expectOutputFilesToEqualMocks('interfaces', 'test1');
  });

  it('should compile enums', () => {
    expectOutputFilesToEqualMocks('enums', 'test1');
  });

});

describe('Compile Markdown To Single File', () => {


  it('should compile', () => {
    expectFileToEqualMock('API.md', 'test2');
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
