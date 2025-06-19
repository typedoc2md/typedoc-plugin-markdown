import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Class Reflection)`, () => {
  it(`should compile basic class`, () => {
    expectFileToEqual('reflections', 'members', 'classes/BasicClass.md');
  });

  it(`should compile class with simple props`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithSimpleProps.md',
    );
  });

  it(`should compile class with complex props`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithComplexProps.md',
    );
  });

  it(`should compile abstract class`, () => {
    expectFileToEqual('reflections', 'members', 'classes/AbstractClass.md');
  });

  it(`should compile derived class`, () => {
    expectFileToEqual('reflections', 'members', 'classes/DerivedClassA.md');
  });

  it(`should compile class with constructor overloads`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithConstructorOverloads.md',
    );
  });

  it(`should compile class with type parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithTypeParameters.md',
    );
  });

  it(`should compile class with accessors`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithAccessors.md',
    );
  });

  it(`should compile class with modifiers`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithModifiers.md',
    );
  });

  it(`should compile class with flags`, () => {
    expectFileToEqual('reflections', 'members', 'classes/ClassWithFlags.md');
  });

  it(`should compile disposable class`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/DisposableClass.md',
      1,
    );
  });

  it(`should compile class with symbols`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithSymbols.md',
      1,
    );
  });

  it(`should compile hierarchy for BaseClass`, () => {
    expectFileToEqual('reflections', 'members', 'classes/BaseClass.md', 1);
  });

  it(`should compile hierarchy for ChildClassA`, () => {
    expectFileToEqual('reflections', 'members', 'classes/ChildClassA.md', 1);
  });

  it(`should compile hierarchy for GrandChildClassA`, () => {
    expectFileToEqual('reflections', 'members', 'classes/GrandChildClassA.md');
  });

  it(`should compile class with prop categories`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithPropCategories.md',
    );
  });

  it(`should compile class without prop categories`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithoutPropCategories.md',
    );
  });

  it(`should compile class with accessor keywords`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithAccessorKeywords.md',
    );
  });
});
