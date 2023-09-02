import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Navigation`, () => {
  test(`should gets Navigation Json for single entry point`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      [FixtureOutputFileStrategy.Members, FixtureOutputFileStrategy.Modules],
      'sidebar.json',
      1,
    );
  });

  test(`should gets Navigation Json for multiple entry points`, () => {
    expectFileToEqual(
      FixtureOutputDir.Groups,
      [FixtureOutputFileStrategy.Members, FixtureOutputFileStrategy.Modules],
      'sidebar.json',
    );
  });

  test(`should get Navigation Json for packages`, () => {
    expectFileToEqual(
      FixtureOutputDir.Packages,
      [FixtureOutputFileStrategy.Members, FixtureOutputFileStrategy.Modules],
      'sidebar.json',
      1,
    );
  });
});
