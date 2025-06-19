import { expectUrlsToEqual } from '../helpers.js';

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
});
