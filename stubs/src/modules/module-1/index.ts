export class Module1ClassA {
  prop: string;
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

export enum Module1EnumA {
  Value1,
  Value2,
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

export * as nameSpace from './namespace-1';
