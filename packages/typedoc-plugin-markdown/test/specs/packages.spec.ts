import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Packages`, () => {
  test(`should compile readmes for a packages`, () => {
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      'README.md',
      1,
    );
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      'package-1/README.md',
      1,
    );
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      'package-2/README.md',
      1,
    );
  });

  test(`should compile index page for packages`, () => {
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      ['modules.md'],
    );
  });

  test(`should compile member page for packages`, () => {
    expectFileToEqual(
      FixtureOutputDir.Packages,
      FixtureOutputFileStrategy.Members,
      ['package-1/interfaces/PackageInterface.md'],
    );
  });
});
