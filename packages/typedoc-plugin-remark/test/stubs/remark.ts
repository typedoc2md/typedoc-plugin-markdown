/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @module
 */

export const someVariable = true;

/**
 * @example x=1
 */
export const someVariableWithHeading = true;

export const someFunction = (a: string, b: number) => {
  return a + b;
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

export namespace Namespace {
  export const someVariable = true;
}
