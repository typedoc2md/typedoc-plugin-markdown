/**
 * @module
 */

export const someVariable = true;

export const someFunction = (a: string, b: number) => {
  return true;
};

export class Class {
  a: string;
  b: number;
}

export type SimpleTypeAlias = string | boolean;

export type TypeAliasWithTypeDeclaration = {
  a: string;
  b: number;
};

export interface Interface {
  a: string;
  b: number;
}

export enum Enum {
  A,
  B,
}
