import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Packages)`, () => {
  it(`should compile packages index`, () => {
    expectFileToEqual('packages', 'members', ['packages.md', 'index.md'], 1);
    expectFileToEqual('packages', 'modules', ['packages.md', 'README.md'], 1);
  });

  it(`should compile index for packages`, () => {
    expectFileToEqual('packages', 'members', 'index.md', 1);
    expectFileToEqual('packages', 'modules', 'index.md', 1);
  });

  it(`should compile index page for member packages`, () => {
    expectFileToEqual('packages', 'members', '@scope/package-1/index.md', 1);
    expectFileToEqual('packages', 'members', 'package-2/index.md', 1);
    expectFileToEqual('packages', 'members', '@scope/package-3/index.md', 1);
  });

  it(`should compile index page for module packages`, () => {
    expectFileToEqual('packages', 'modules', '@scope/package-1.md', 1);
    expectFileToEqual('packages', 'modules', 'package-2/index.md', 1);
    expectFileToEqual('packages', 'modules', '@scope/package-3/index.md', 1);
  });

  it(`should compile member page for packages`, () => {
    expectFileToEqual('packages', 'members', [
      '@scope/package-1/interfaces/PackageInterface.md',
      'package-1/interfaces/PackageInterface.md',
    ]);
  });

  it(`should compile relative entry module package`, () => {
    expectFileToEqual('packages', 'members', 'package-6.md', 1);
  });

  it(`should compile member for relative entry module package`, () => {
    expectFileToEqual(
      'packages',
      'members',
      'package-6/module1/interfaces/PackageInterface1.md',
      1,
    );
  });

  it(`should compile index for a single package`, () => {
    expectFileToEqual('package', 'members', 'README.md');
  });

  it(`should compile member page for a single package`, () => {
    expectFileToEqual('package', 'members', 'interfaces/PackageInterface.md');
  });
});
