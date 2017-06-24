require('mocha');
const path = require('path');
const fs = require('fs');
const chai = require('chai');
const chaiFiles = require('chai-files');
const file = chaiFiles.file;
const expect = chai.expect;
const compiledDir = 'tests/out/';
const expectedDir = 'tests/mocks/';
var typedoc = require('typedoc');
var parallel = require('mocha.parallel');
const config = require('./config.markdown.outfile');
var typedoc = require('typedoc');

describe('Compile markdown to single file', () => {

  it('should compile', (done) => {

    console.log('config', config);

    const app = new typedoc.Application(config);

    const result = app.options.read(app.options.getRawValues());
    const src = app.expandInputFiles(result.inputFiles);
    const project = app.convert(src);
    app.generateDocs(project, app.options.getRawValues().out);
    done();

  });

});
