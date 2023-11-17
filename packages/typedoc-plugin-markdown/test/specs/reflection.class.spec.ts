import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/fixture-config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Class Reflection`, () => {
  test(`should compile abstract class`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'classes/AbstractClass.md',
    );
  });

  test(`should compile derived class`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'classes/DerivedClassA.md',
    );
  });

  test(`should compile class with constructor overloads`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'classes/ClassWithConstructorOverloads.md',
    );
  });

  test(`should compile class with type parameters`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'classes/ClassWithTypeParameters.md',
    );
  });

  test(`should compile class with accessors`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'classes/ClassWithAccessors.md',
    );
  });

  test(`should compile class with modifiers`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'classes/ClassWithModifiers.md',
    );
  });
});
