import { expectFileToEqual } from '@devtools/testing';

describe(`Navigation`, () => {
  test(`should get with and without groups and categories`, () => {
    expectFileToEqual('navigation', ['members', 'modules'], 'sidebar.json');
  });

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

  test(`should gets Navigation Json for documents multi module`, () => {
    expectFileToEqual('documents', ['members', 'modules'], 'sidebar.json');
  });

  test(`should gets Navigation Json for documents single module`, () => {
    expectFileToEqual(
      'documentsSingleModule',
      ['members', 'modules'],
      'sidebar.json',
    );
  });

  test(`should gets Navigation Json for categories multi module`, () => {
    expectFileToEqual('categories', 'categories', 'sidebar.json');
  });

  test(`should gets Navigation Json for categories single module`, () => {
    expectFileToEqual('categoriesSingleModule', 'categories', 'sidebar.json');
  });

  test(`should gets Navigation Json for categories packages`, () => {
    expectFileToEqual('packagesCategories', 'categories', 'sidebar.json');
  });

  test(`should gets Navigation Json for groups multi module`, () => {
    expectFileToEqual('groupsRouter', 'groups', 'sidebar.json');
  });

  test(`should gets Navigation Json for groups single module`, () => {
    expectFileToEqual('groupsRouterSingleModule', 'groups', 'sidebar.json');
  });

  test(`should gets Navigation Json for groups packages`, () => {
    expectFileToEqual('packagesGroups', 'groups', 'sidebar.json');
  });
});
