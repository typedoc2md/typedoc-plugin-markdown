import { expectFileToEqual } from '@devtools/testing';

describe(`Objects And Params`, () => {
  test(`should compile object with symbol`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'variables/objectWithSymbol.md',
    );
  });

  test(`should compile variable assigned to an object literal`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'variables/objectLiteralVariable.md',
    );
  });

  test(`should compile literal type`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'type-aliases/LiteralType.md',
    );
  });

  test(`should compile intersection type`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'type-aliases/IntersectionType.md',
    );
  });

  test(`should compile union type`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'type-aliases/UnionType.md',
    );
  });

  test(`should compile basic interface`, () => {
    expectFileToEqual(
      'objectsAndParams',
      'members',
      'interfaces/BasicInterface.md',
    );
  });

  test(`should compile function returning a promise`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAPromise.md',
    );
  });

  test(`should compile function returning an object`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAnObject.md',
    );
  });

  test(`should compile function with nested parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithNestedParameters.md',
    );
  });
});
