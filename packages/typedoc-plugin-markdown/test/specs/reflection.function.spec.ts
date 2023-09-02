import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Function Reflection`, () => {
  test(`should compile function with a parameter`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/basicFunction.md',
    );
  });

  test(`should compile function with default parameters`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/functionWithDefaultParameters.md',
    );
  });

  test(`should compile function with optional parameters`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/functionWithOptionalParameters.md',
    );
  });

  test(`should compile function with optional parameters`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/functionWithOptionalParameters.md',
    );
  });

  test(`should compile function with nested parameters`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/functionWithNestedParameters.md',
    );
  });

  test(`should compile function with named params`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/functionWithNamedParams.md',
    );
  });

  test(`should compile function with type parameters`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/functionWithTypeParameters.md',
    );
  });

  test(`should compile function with multiple signatures`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/functionWithMultipleSignatures.md',
    );
  });

  test(`should compile function returning an object`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/functionReturningAnObject.md',
    );
  });

  test(`should compile function returning a function`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'functions/functionReturningAFunction.md',
    );
  });
});
