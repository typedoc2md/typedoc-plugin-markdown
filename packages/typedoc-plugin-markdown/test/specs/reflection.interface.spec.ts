import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Interface Reflection)`, () => {
  it(`should compile basic interface`, () => {
    expectFileToEqual('reflections', 'members', 'interfaces/BasicInterface.md');
  });

  it(`should compile interface with type parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithTypeParameters.md',
    );
  });

  it(`should compile extended interface`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/ExtendedInterface.md',
    );
  });

  it(`should compile indexable interface`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/IndexableInterface.md',
    );
  });

  it(`should compile multiple indexable interface`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/MultipleIndexableInterface.md',
    );
  });

  it(`should compile interface with event properties`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithEventProperties.md',
    );
  });

  it(`should compile interface with flags`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithFlags.md',
    );
  });

  it(`should compile interface with comments`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithComments.md',
    );
  });

  it(`should compile interface with function overloads`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithFunctionOverloads.md',
    );
  });
});
