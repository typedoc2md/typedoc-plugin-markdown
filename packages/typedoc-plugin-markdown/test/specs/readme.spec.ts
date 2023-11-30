import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Readmes`, () => {
  test(`should get merged readme for members`, () => {
    expectFileToEqual(
      FixtureOutputDir.Readme,
      FixtureOutputFileStrategy.Members,
      ['index.md'],
    );
  });

  test(`should get merged readme for modules`, () => {
    expectFileToEqual(
      FixtureOutputDir.Readme,
      FixtureOutputFileStrategy.Modules,
      ['index.md'],
    );
  });
});
