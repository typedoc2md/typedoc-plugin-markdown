import { expectFileToEqual } from '@devtools/testing';

describe(`Navigation`, () => {
  test(`should gets Navigation Json for single entry point`, () => {
    expectFileToEqual('reflections', ['members', 'modules'], 'sidebar.json', 1);
  });

  test(`should gets Navigation Json for multiple entry points`, () => {
    expectFileToEqual('groups', ['members', 'modules'], 'sidebar.json');
  });

  test(`should get Navigation Json for packages`, () => {
    expectFileToEqual('packages', ['members', 'modules'], 'sidebar.json');
  });

  test(`should gets Navigation Json for entry modules`, () => {
    expectFileToEqual('entryfiles', ['members', 'modules'], 'sidebar.json');
  });

  test(`should gets Navigation Json for modules with parts`, () => {
    expectFileToEqual('modules', ['members', 'modules'], 'sidebar.json');
  });
});
