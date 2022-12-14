export class Module2ClassA {
  prop: string;
  someMethod() {
    return 'a';
  }
}

export class Module2ClassB {
  prop: string;
  someMethod() {
    return 'a';
  }
}

export interface Module2InterfaceA {
  a: string;
  b: string;
}

export interface Module2InterfaceB {
  a: string;
  b: string;
}

export enum Module2EnumA {
  Value1,
  Value2,
}

export enum Module2EnumB {
  Value1,
  Value2,
}

export type Module2TypeLiteralA = 'yes' | 'no';
export type Module2TypeLiteralB = 'yes' | 'no';

export const module2VariableA = 'ok';
export const module2VariableB = 'ok';

export function module2FunctionA() {
  return 'ok';
}

export function module2sFunctionB() {
  return 'ok';
}
