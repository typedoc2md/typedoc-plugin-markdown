export interface InterfaceItemA {
  prop: string;
}

export interface InterfaceItemB {
  prop: string;
}

export let declarationItemA: string;
export let declarationItemB: string;

export class ClassItemB {}
export class ClassItemA {}

export function functionItemA() {
  return;
}

export function functionItemB() {
  return;
}

export enum enumItemB {}
export enum enumItemA {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace namespaceA {
  export class SomeNestedClass {}
}
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace namespaceB {}
