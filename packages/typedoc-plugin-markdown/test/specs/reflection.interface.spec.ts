import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Interface Reflection`, () => {
  test(`should compile basic interface`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'interfaces/BasicInterface.md',
    );
  });

  test(`should compile interface with type parameters`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'interfaces/InterfaceWithTypeParameters.md',
    );
  });

  test(`should compile extended interface`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'interfaces/ExtendedInterface.md',
    );
  });

  test(`should compile indexable interface`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'interfaces/IndexableInterface.md',
    );
  });

  test(`should compile interface with event properties`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'interfaces/InterfaceWithEventProperties.md',
    );
  });
});
