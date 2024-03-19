import { expectFileToEqual } from '@devtools/testing';

describe(`Packages`, () => {
  test(`should compile readmes for a packages`, () => {
    expectFileToEqual('packages', 'members', 'index.md');
    expectFileToEqual('packages', 'members', 'package-1/index.md', 1);
  });

  test(`should compile index page for packages`, () => {
    expectFileToEqual('packages', 'members', ['packages.md']);
    expectFileToEqual('packages', 'members', 'package-1/globals.md', 1);
    expectFileToEqual('packages', 'members', 'package-2/modules.md', 1);
  });

  test(`should compile member page for packages`, () => {
    expectFileToEqual('packages', 'members', [
      'package-1/interfaces/PackageInterface.md',
    ]);
  });

  test(`should compile relative entry module package`, () => {
    expectFileToEqual('packages', 'members', 'package-6.md', 1);
  });
  test(`should compile member for relative entry module package`, () => {
    expectFileToEqual(
      'packages',
      'members',
      'package-6/module1/interfaces/PackageInterface1.md',
      1,
    );
  });

  test(`should compile index for a single package`, () => {
    expectFileToEqual('package', 'members', 'README.md');
  });

  test(`should compile member page for a single package`, () => {
    expectFileToEqual('package', 'members', 'interfaces/PackageInterface.md');
  });
});
