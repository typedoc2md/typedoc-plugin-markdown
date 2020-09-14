/**
 * This is a function with multiple arguments and a return value.
 *
 * @param paramZ - This is a string parameter.
 * @param paramG - This is a parameter flagged with any.<br />
 *     This sentence is placed in the next line.
 *
 * @param paramA
 *   This is a **parameter** pointing to an interface.
 *
 */
export function functionWithParameters(
  paramZ: string,
  paramG: any,
  paramA: any,
): number {
  return 0;
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
  requiredParam: string,
  optionalParam?: string,
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

export interface CallableSignature {
  (): string;
}

function functionWithNamedParams({ x: number, b: string }) {
  return '';
}

export const functionWithTypeParams = <Item = any>() => true;
