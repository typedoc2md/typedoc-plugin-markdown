import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Navigation)`, () => {
  it(`should get with and without groups and categories`, () => {
    expectFileToEqual('navigation', ['members', 'modules'], 'sidebar.json');
  });

  it(`should gets Navigation Json for single entry point`, () => {
    expectFileToEqual('reflections', ['members', 'modules'], 'sidebar.json', 1);
  });

  it(`should gets Navigation Json for multiple entry points`, () => {
    expectFileToEqual('groups', ['members', 'modules'], 'sidebar.json');
  });

  it(`should get Navigation Json for packages`, () => {
    expectFileToEqual('packages', ['members', 'modules'], 'sidebar.json');
  });

  it(`should gets Navigation Json for entry modules`, () => {
    expectFileToEqual('entryfiles', ['members', 'modules'], 'sidebar.json');
  });

  it(`should gets Navigation Json for modules with parts`, () => {
    expectFileToEqual('modules', ['members', 'modules'], 'sidebar.json');
  });

  it(`should gets Navigation Json for documents multi module`, () => {
    expectFileToEqual('documents', ['members', 'modules'], 'sidebar.json');
  });

  it(`should gets Navigation Json for documents single module`, () => {
    expectFileToEqual(
      'documentsSingleModule',
      ['members', 'modules'],
      'sidebar.json',
    );
  });
});
