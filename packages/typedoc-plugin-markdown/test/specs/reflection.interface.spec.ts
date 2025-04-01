import { expectFileToEqual } from '@devtools/testing';

describe(`Interface Reflection`, () => {
  test(`should compile basic interface`, () => {
    expectFileToEqual('reflections', 'members', 'interfaces/BasicInterface.md');
  });

  test(`should compile interface with type parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithTypeParameters.md',
    );
  });

  test(`should compile extended interface`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/ExtendedInterface.md',
    );
  });

  test(`should compile indexable interface`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/IndexableInterface.md',
    );
  });

  test(`should compile multiple indexable interface`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/MultipleIndexableInterface.md',
    );
  });

  test(`should compile interface with event properties`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithEventProperties.md',
    );
  });

  test(`should compile interface with flags`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithFlags.md',
    );
  });

  test(`should compile interface with comments`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithComments.md',
    );
  });

  test(`should compile interface with function overloads`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithFunctionOverloads.md',
    );
  });
});
