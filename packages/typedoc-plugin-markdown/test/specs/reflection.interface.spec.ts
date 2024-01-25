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

  test(`should compile interface with event properties`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'interfaces/InterfaceWithEventProperties.md',
    );
  });
});
