/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @module
 */

/**
 * This is a function that is assigned to a variable.
 *
 * @param someParam  This is some numeric parameter.
 *
 * @see http://abc.com
 */
export const basicFunction = (someParam: number) => {
  return 0;
};

/**
 * This is a function that is assigned to a variable.
 *
 * @returns This is a return value
 */
export const basicFunctionWithReturns = () => {
  return 0;
};

/**
 * This is a function with a parameter that has a default value.
 *
 * @param valueA  A parameter with a default string value.
 * @param valueB  A parameter with a default numeric value.
 * @param valueC  A parameter with a default NaN value.
 * @param valueD  A parameter with a default boolean value.
 * @param valueE  A parameter with a default null value.
 */
export function functionWithDefaultParameters(
  valueA = 'defaultValue',
  valueB = 100,
  valueC: number = Number.NaN,
  valueD = true,
  valueE: boolean = true,
  valueF = '<foo>',
): string {
  return valueA;
}

/**
 * This is a function with a parameters.
 *
 * @param requiredParam  A normal parameter.
 * @param optionalParam  An optional parameter.
 */
export function functionWithOptionalParameters(
  firstParamWithDefault = true,
  requiredParam: string,
  optionalParam?: string,
  paramWithDefault = 0,
) {}

/**
 * Some nested params.
 * @param params The parameters passed to the method.
 * @param params.name The name of the new group.
 * @param params.nestedObj A nested object.
 * @param context The context of the method call.
 */
export function functionWithNestedParameters(
  params: {
    name: string;
    parent?: number;
    nestedObj: {
      name: string;
      value: number;
      obj: {
        name: () => void;
      };
    };
  },
  context: any,
  somethingElse?: string,
) {
  return true;
}

/**
 * @param __namedParameters various options
 */
export function functionWithNamedParams(
  { foo = 42, bar = 43 }: { foo?: number; bar?: number } = {},
  /**
   * Another param comment
   */
  anotherParam: string,
) {}

/**
 * Function with reset parmas
 */
export function functionWithRestParams(param: string, ...restParams: string[]) {
  return true;
}

/**
 * Function with function parmas
 */
export function functionWithComplexParams(
  paramA: (a: string) => true,
  paramB: { x: 1 },
) {
  return true;
}

/**
 * Function with type parameters
 * @typeParam T Comments for T
 */

export const functionWithTypeParameters = <T, Item = boolean | string>() =>
  true;
/**
 * This is the first signature of a function with multiple signatures.
 *
 * @param value  The name value.
 */
export function functionWithMultipleSignatures(value: string): string;

/**
 * This is the second signature of a function with multiple signatures.
 *
 * @param value       An object containing the name value.
 * @param value.name  A value of the object.
 */
export function functionWithMultipleSignatures(value: { name: string }): string;

/**
 * Main function comment.
 */
export function functionWithMultipleSignatures(): string {
  return '';
}

/**
 * Comments for function
 *
 * @returns Return comments
 */
export function functionReturningAnObject() {
  return {
    x: 1,
    y: 2,
  };
}

/**
 * Comments for function
 * @returns Return comments
 */
export function functionReturningAString() {
  return 'hello';
}

/**
 * Comments for function
 * @returns Return comments
 */
export function functionReturningAUnionType():
  | string
  | boolean
  | 'string1'
  | 'string2' {
  return 'hello';
}

/**
 * Comments for function
 */
export function functionReturningAFunction() {
  return <T>(x: string) => true;
}

/**
 * Comments for function
 * @returns Return comments
 */
export function functionReturningAPromise(): Promise<{
  prop: string;
}> {
  return new Promise(() => {
    return {
      prop: 'prop',
    };
  });
}

const someConst = {
  /**
   * a comments
   */
  a: '',
  /**
   * b comments
   */
  b: '',
};

type SomeType = typeof someConst;

export function functionWithUnionParams(
  /**
   * Comments for primitiveUnions
   */
  primitiveUnions: string | number,
  /**
   * Comments for objectUnionsUseful
   */
  objectUnions:
    | {
        a: string;
        b: 1;
      }
    | {
        a: number;
        b: 1;
        c: { x: string };
      },
  /**
   * Comments for mixedUnions
   */
  mixedUnions:
    | string
    | SomeType
    | number
    | {
        /**
         * Comments for a
         */
        a: {
          y: string;
          z: string;
        };
      },
  /**
   * Comments for noUnions
   */
  noUnions: string,
) {
  return void 0;
}

/**
 * Comments for main curriedFunction
 *
 * @function
 */
export let curriedFunction: {
  /**
   * Comments for current function 1
   */
  (searchElement: unknown): <Value>(
    /**
     * Comments for iterable arg
     */
    iterable: Iterable<Value>,
  ) => boolean;
  <Value>(searchElement: unknown, iterable: Iterable<Value>): string;
};

export type Stuff = { a: string; b: string };

/**
 * Comments for array of stuff
 */
export const functionWithArrayOfStuff = (a: [Stuff]) => {};

/**
 * Comments for array of union stuff
 */
export const functionWithArrayOfUnionStuff = (
  a: [(null | undefined | Stuff)?],
) => {};

/**
 * Comments for array of stuff?
 */
export const functionWithArrayOfOptionalStuff = (a: [Stuff?]) => {};

export const typedef = {
  /**
   * Comments for a
   */
  a: '',
  b: '',
};

/**
 * @inline
 */
export type TypeDefOptions = typeof typedef;

/**
 * @inline
 */
export type ExplicitTypeDefOptions = {
  a: string;
  b: string;
};

export const tupleTypeFunction = (
  /**
   * opts comments
   */
  opts: [TypeDefOptions],
) => {};
export const tupleTypeFunctionOptional = (
  opts: [(TypeDefOptions | null | undefined)?],
) => {};

export const tupleTypeFunctionInlineExplicit = (
  opts: [ExplicitTypeDefOptions],
) => {};
