import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Variable Reflection`, () => {
  test(`should compile variable assigned to a string`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'variables/stringVariable.md',
    );
  });

  test(`should compile variable assigned to an object literal`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'variables/objectLiteralVariable.md',
    );
  });

  test(`should compile type operator variable`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'variables/typeOperatorVariable.md',
    );
  });
});
