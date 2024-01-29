import { expectFileToEqual } from '@devtools/testing';

describe(`Class Reflection`, () => {
  test(`should compile abstract class`, () => {
    expectFileToEqual('reflections', 'members', 'classes/AbstractClass.md');
  });

  test(`should compile derived class`, () => {
    expectFileToEqual('reflections', 'members', 'classes/DerivedClassA.md');
  });

  test(`should compile class with constructor overloads`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithConstructorOverloads.md',
    );
  });

  test(`should compile class with type parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithTypeParameters.md',
    );
  });

  test(`should compile class with accessors`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithAccessors.md',
    );
  });

  test(`should compile class with modifiers`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/ClassWithModifiers.md',
    );
  });

  test(`should compile class with flags`, () => {
    expectFileToEqual('reflections', 'members', 'classes/ClassWithFlags.md');
  });

  test(`should compile disposable class`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'classes/DisposableClass.md',
      1,
    );
  });
});
