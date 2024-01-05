import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Text`, () => {
  test(`should get translations for index page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Text,
      FixtureOutputFileStrategy.Members,
      ['modules.md'],
    );
  });

  test(`should get translations for module page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Text,
      FixtureOutputFileStrategy.Members,
      ['module-1/README.md'],
    );
  });

  test(`should get translations for member page`, () => {
    expectFileToEqual(
      FixtureOutputDir.Text,
      FixtureOutputFileStrategy.Members,
      ['module-1/interfaces/SomeInterface.md'],
    );
  });
});
