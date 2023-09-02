import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Readmes`, () => {
  test(`should compile readme for a project`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      FixtureOutputFileStrategy.Modules,
      'README.md',
      1,
    );
  });

  test(`should compile readmes for a momorepo`, () => {
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
});
