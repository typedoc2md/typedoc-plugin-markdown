import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Enum Reflection`, () => {
  test(`should compile basic enum`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'enumerations/BasicEnum.md',
    );
  });

  test(`should compile enum with values`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      '/enumerations/EnumWithValues.md',
    );
  });
});
