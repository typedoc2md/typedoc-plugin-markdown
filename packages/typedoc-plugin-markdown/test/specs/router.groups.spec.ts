import { expectFileToEqual } from '@devtools/testing';

describe(`Groups Router`, () => {
  test(`should get groups index page`, () => {
    expectFileToEqual('groupsRouter', 'groups', 'basic/README.md');
  });

  test(`should get groups page`, () => {
    expectFileToEqual('groupsRouter', 'groups', 'basic/Classes.md');
  });

  test(`should get index page for groups with single module`, () => {
    expectFileToEqual('groupsRouterSingleModule', 'groups', 'README.md');
  });

  test(`should get groups page with single module`, () => {
    expectFileToEqual('groupsRouterSingleModule', 'groups', 'Classes.md');
  });

  test(`should get index page for groups with packages`, () => {
    expectFileToEqual('packagesGroups', 'groups', 'package-1/README.md');
  });
});
