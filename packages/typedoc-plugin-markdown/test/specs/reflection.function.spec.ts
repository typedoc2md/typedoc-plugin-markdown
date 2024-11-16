import { expectFileToEqual } from '@devtools/testing';

describe(`Function Reflection`, () => {
  test(`should compile function with a parameter`, () => {
    expectFileToEqual('reflections', 'members', 'functions/basicFunction.md');
  });

  test(`should compile function with default parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithDefaultParameters.md',
    );
  });

  test(`should compile function with optional parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithOptionalParameters.md',
    );
  });

  test(`should compile function with optional parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithOptionalParameters.md',
    );
  });

  test(`should compile function with nested parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithNestedParameters.md',
    );
  });

  test(`should compile function with named params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithNamedParams.md',
    );
  });

  test(`should compile function with type parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithTypeParameters.md',
    );
  });

  test(`should compile function with multiple signatures`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithMultipleSignatures.md',
    );
  });

  test(`should compile curried function`, () => {
    expectFileToEqual('reflections', 'members', 'functions/curriedFunction.md');
  });

  test(`should compile function returning a string`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAString.md',
    );
  });

  test(`should compile function returning an object`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAnObject.md',
    );
  });

  test(`should compile function returning a union`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAUnionType.md',
    );
  });

  test(`should compile function returning a function`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAFunction.md',
    );
  });

  test(`should compile function returning a promise`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAPromise.md',
    );
  });

  test(`should compile function with rest params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithRestParams.md',
    );
  });

  test(`should compile function with complex params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithComplexParams.md',
    );
  });
});
