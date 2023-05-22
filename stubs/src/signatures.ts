export interface PropInterface {
  prop: string;
}

/**
 * This is a function with multiple arguments and a return value.
 *
 * @example
 *
 * ```ts
 * const example=true;
 * ```
 *
 * @param paramZ - This is a string parameter.
 * @param paramG - This is a parameter with intersection type literal.
 * @param paramA
 *   This is a **parameter** pointing to an interface.
 *
 */
export function functionWithParameters(
  paramZ: string,
  paramG: { prop: string } & { prop: number },
  paramA: PropInterface,
): number {
  return 0;
}

export interface CallableSignature {
  (): string;
}

/**
 * This is a function that is assigned to a variable.
 *
 * @param someParam  This is some numeric parameter.
 */
export const variableFunction = (someParam: number) => {
  return 0;
};

/**
 * This is a function with a parameter that is optional.
 *
 * @param requiredParam  A normal parameter.
 * @param optionalParam  An optional parameter.
 */
export function functionWithOptionalParam(
  firstParamWithDefault = true,
  requiredParam: string,
  optionalParam?: string,
  paramWithDefault = 0,
) {}

/**
 * This is a function with a parameter that has a default value.
 *
 * @param valueA  A parameter with a default string value.
 * @param valueB  A parameter with a default numeric value.
 * @param valueC  A parameter with a default NaN value.
 * @param valueD  A parameter with a default boolean value.
 * @param valueE  A parameter with a default null value.
 */
export function functionWithDefaults(
  valueA = 'defaultValue',
  valueB = 100,
  valueC: number = Number.NaN,
  valueD = true,
  valueE: boolean = null,
  valueF = '<foo>',
): string {
  return valueA;
}

/**
 * This is a function with rest parameter.
 *
 * @param rest  The rest parameter.
 */
export function functionWithRest(...rest: string[]): string {
  return rest.join(', ');
}

/**
 * This is the first signature of a function with multiple signatures.
 *
 * @param value  The name value.
 */
export function multipleSignatures(value: string): string;

/**
 * This is the second signature of a function with multiple signatures.
 *
 * @param value       An object containing the name value.
 * @param value.name  A value of the object.
 */
export function multipleSignatures(value: { name: string }): string;

/**
 * This is the actual implementation, this comment will not be visible
 * in the generated documentation.
 *
 */
export function multipleSignatures(): string {
  return '';
}

export function functionWithUnionTypes(
  arg: boolean[] | number,
  ...args: (string | number)[]
): any {
  return null;
}

export function functionWithNamedParams({ params: { x: number, b: string } }) {
  return '';
}

/**
 * @private
 */
export function privateFunction() {
  return '';
}

export const functionWithTypeParams = <T, Item = boolean | string>() => true;

/**
 * Comments for function
 * @returns Return comments
 */
export function functionReturningAnObject() {
  return { x: 1, y: 2 };
}

/**
 * Comments for function
 * @returns Return comments
 */
export function functionReturningAFunction() {
  return <T>(x: string) => true;
}

/**
 * Comments with a return definition
 * @returns Return comments
 */
export function commentsInReturn() {
  return true;
}

/**
 * Shorthand switch/case helper function. Cases arguments list is a tuple
 * consisting of case (`T`) and returned result (`R`). Returns a function where a default value is provided.
 *
 * @param value - Value to test against
 * @param cases - Tuple of case and the result if `value` and `case` is equal
 * @returns Function for which to provide the default value
 */
export const swtch =
  <T, R>(value: T, ...cases: [T, R][]) =>
  (def: R) => {
    for (const c of cases) {
      if (c[0] === value) return c[1];
    }

    return def;
  };

export let functionDeclaration: (someArg: number) => boolean;

/**
 * FOO
 * @param __namedParameters various options
 * @param foo An interesting value
 * @param bar Another value
 */
export function functionWithNamedParamsAndComments(
  { foo = 42, bar = 43 }: { foo?: number; bar?: number } = {},
  /**
   * Another param comment
   */
  anotherParam: string,
) {}

/**
 * @param n - a|b
 */
export function functionWithPipesInParamsAndComments(
  n: number | null,
): number | null {
  return n;
}

export function functionWithReferenceType(
  descriptor: TypedPropertyDescriptor<any>,
) {
  return true;
}

/**
 * Some nested params.
 * @param params The parameters passed to the method.
 * @param params.name The name of the new group.
 * @param params.nestedObj A nested object.
 * @param context The context of the method call.
 */
export function functionWithNestedParams(
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
) {
  return true;
}

export class ClassWithConstructor {
  constructor(x: string, y: string) {}
}

export const promiseReturningASymbol = (): Promise<any> => {
  return new Promise((resolve) => {
    resolve({ id: 'id', data: 'data' });
  });
};

export const promiseReturningAnObject = (): Promise<{
  id: string;
  data: string;
}> => {
  return new Promise((resolve) => {
    resolve({ id: 'id', data: 'data' });
  });
};
