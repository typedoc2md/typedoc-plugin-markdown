/**
 * Comments Module1ClassA
 */
export class Module1ClassA {
  /**
   * Comments propa
   */
  propa: string;
  /**
   * Comments for method
   * @returns comments for return
   */
  someMethod() {
    return 'a';
  }
}

export class Module1ClassB {
  prop: string;
  someMethod() {
    return 'a';
  }
}

/**
 * Comments for Module1EnumA
 */
export enum Module1EnumA {
  /**
   * Comments value1
   */
  Value1,
  /**
   * Comments Value2
   */
  Value2 = 'Value2',
}

export enum Module1EnumB {
  Value1,
  Value2,
}

export interface Module1InterfaceA {
  prop1: string;
  prop2: string;
}

export interface Module1InterfaceB {
  prop1: string;
  prop2: string;
}

export type Module1TypeLiteralA = 'a' | 'b';
export type Module1TypeLiteralB = 'a' | 'b';

export const module1VariableA = 'a';
export const module1VariableB = 'a';

export function module1FunctionA() {
  return 'a';
}

export function module1FunctionB() {
  return 'a';
}

export * as someNameSpace from './namespace-1';
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace someNameSpaceB {
  const x = 1;
}
