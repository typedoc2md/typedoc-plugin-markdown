import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Objects and Params)`, () => {
  it(`should compile object with symbol`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'variables/objectWithSymbol.md',
    );
  });

  it(`should compile variable assigned to an object literal`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'variables/objectLiteralVariable.md',
    );
  });

  it(`should compile literal type`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'type-aliases/LiteralType.md',
    );
  });

  it(`should compile intersection type`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'type-aliases/IntersectionType.md',
    );
  });

  it(`should compile union type`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'type-aliases/UnionType.md',
    );
  });

  it(`should compile basic interface`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'interfaces/BasicInterface.md',
    );
  });

  it(`should compile function returning a promise`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'functions/functionReturningAPromise.md',
    );
  });

  it(`should compile function returning an object`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'functions/functionReturningAnObject.md',
    );
  });

  it(`should compile function with nested parameters`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'functions/functionWithNestedParameters.md',
    );
  });

  it(`should compile function returning a union`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'functions/functionReturningAUnionType.md',
    );
  });
});
