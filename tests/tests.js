require('mocha');
const chai = require('chai');
const chaiFiles = require('chai-files');
const file = chaiFiles.file;
const expect = chai.expect;
const compiledDir = 'tests/compiled/';
const expectedDir = 'tests/expected/';

chai.use(chaiFiles);

describe('Compilation', () => {


  it('should compile index', () => {
    expectFile('index.md');
  });

  it('should compile basic types', () => {
    expectFile('modules/_basic_types_.md');
  });

  it('should compile basic class', () => {
    expectFile('modules/_classes_basic_class_.md');
  });

  it('should compile inherited classes', () => {
    expectFile('modules/_classes_inheritance_.md');
  });
  
});

function expectFile(fileName) {
  expect(file(`${compiledDir}${fileName}`)).to.equal(file(`${expectedDir}${fileName}`));
}
