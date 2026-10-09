import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Function Reflection)`, () => {
  it(`should compile function with a parameter`, () => {
    expectFileToEqual('reflections', 'members', 'functions/basicFunction.md');
  });

  it(`should compile function with default parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithDefaultParameters.md',
    );
  });

  it(`should compile function with optional parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithOptionalParameters.md',
    );
  });

  it(`should compile function with optional parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithOptionalParameters.md',
    );
  });

  it(`should compile function with nested parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithNestedParameters.md',
    );
  });

  it(`should compile function with named params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithNamedParams.md',
    );
  });

  it(`should compile function with type parameters`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithTypeParameters.md',
    );
  });

  it(`should compile function with multiple signatures`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithMultipleSignatures.md',
    );
  });

  it(`should compile curried function`, () => {
    expectFileToEqual('reflections', 'members', 'functions/curriedFunction.md');
  });

  it(`should compile function returning a string`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAString.md',
    );
  });

  it(`should compile function returning an object`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAnObject.md',
    );
  });

  it(`should compile function returning a union`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAUnionType.md',
    );
  });

  it(`should compile function returning a useful union`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningUsefulUnionType.md',
    );
  });

  it(`should compile function returning a function`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAFunction.md',
    );
  });

  it(`should compile function returning a useful function`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAUsefulFunction.md',
    );
  });

  it(`should compile function returning a promise`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAPromise.md',
    );
  });

  it(`should compile function with rest params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithRestParams.md',
    );
  });

  it(`should compile function with complex params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithComplexParams.md',
    );
  });

  it(`should compile function with array of stuff`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithArrayOfStuff.md',
    );
  });

  it(`should compile function with array of optional stuff`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithArrayOfOptionalStuff.md',
    );
  });

  it(`should compile function returning an array of useful objects`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAnArrayOfUsefulObjects.md',
    );
  });

  it(`should compile function returning a useful intersection`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAUsefulIntersection.md',
    );
  });

  it(`should compile function returning an expanded interface`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningAnExpandedInterface.md',
    );
  });

  it(`should compile function with arrays of compound types`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithArraysOfCompoundTypes.md',
    );
  });

  it(`should compile function with array of union stuff`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithArrayOfUnionStuff.md',
    );
  });

  it(`should compile function with union params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithUnionParams.md',
    );
  });

  it(`should compile function with tuple type params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/tupleTypeFunction.md',
    );
  });

  it(`should compile function with tuple type optional params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/tupleTypeFunctionOptional.md',
    );
  });

  it(`should compile function with explicit inline tuple type optional params`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/tupleTypeFunctionInlineExplicit.md',
    );
  });

  it(`should compile function returning function overloads`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionReturningFunctionOverloads.md',
    );
  });

  it(`should compile function with an object parameter before an optional one`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithObjectParamBeforeOptional.md',
    );
  });

  it(`should compile function with a method in an object parameter`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithMethodInObjectParam.md',
    );
  });

  it(`should compile function with an index signature parameter`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithIndexSignatureParam.md',
    );
  });

  it(`should compile function with a union parameter with a default`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'functions/functionWithUnionDefault.md',
    );
  });
});
