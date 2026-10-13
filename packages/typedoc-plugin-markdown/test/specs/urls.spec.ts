import { assertFileExists } from '@devtools/testing';
import { strict as assert } from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { expectFileToEqual, expectUrlsToEqual, getOutDir } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration / Urls)`, () => {
  it(`should gets Urls for multiple entry points`, () => {
    expectUrlsToEqual('urls', 'groups', ['members', 'modules']);
  });

  it(`should gets Urls for single entry points`, () => {
    expectUrlsToEqual('urls', 'reflections', ['members', 'modules']);
  });

  it(`should gets Urls for packages entry points`, () => {
    expectUrlsToEqual('urls', 'packages', ['members', 'modules']);
  });

  it(`should gets Urls for single package entry points`, () => {
    expectUrlsToEqual('urls', 'package', ['members', 'modules']);
  });

  it(`should gets Urls for entry module`, () => {
    expectUrlsToEqual('urls', 'entryfiles', ['members', 'modules']);
  });

  it(`should gets Urls for readme options`, () => {
    expectUrlsToEqual('urls', 'readme', ['members', 'modules']);
  });

  it(`should gets Urls for modules parts`, () => {
    expectUrlsToEqual('urls', 'modules', ['members', 'modules']);
  });

  it(`should gets Urls for documents multi modules`, () => {
    expectUrlsToEqual('urls', 'documents', ['members', 'modules']);
  });

  it(`should gets Urls for documents single module`, () => {
    expectUrlsToEqual('urls', 'documentsSingleModule', ['members', 'modules']);
  });

  it(`should gets Urls with media assets`, () => {
    expectUrlsToEqual('urls', 'comments', ['members']);
  });

  it(`should write safe file names and no duplicate pages`, () => {
    expectFileToEqual('file-names', 'members', 'urls.json');
  });

  it(`should keep pages named with parent directories inside the output directory`, () => {
    const outDir = path.join(getOutDir(), 'md', 'file-names');
    assert.ok(
      !fs.existsSync(path.join(outDir, 'escape')) &&
        !fs.existsSync(path.join(outDir, 'escape-doc.md')) &&
        !fs.existsSync(path.join(outDir, 'members', 'escape')) &&
        !fs.existsSync(path.join(outDir, 'members', 'escape-doc.md')),
      'pages were written outside the output directory',
    );
    assertFileExists(
      'fixtures/out/md/file-names/members/opts-1/escape/README.md',
    );
    assertFileExists(
      'fixtures/out/md/file-names/members/opts-1/documents/escape-doc.md',
    );
  });
});
