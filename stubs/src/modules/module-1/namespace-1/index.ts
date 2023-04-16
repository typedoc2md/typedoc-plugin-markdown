export class NameSpaceClassA {}

export interface NamespaceInterface {
  a: string;
}

export enum NamespaceEnum {
  Value1,
  Value2,
}

export type NamespaceTypeLiteral = 'a' | 'b';

export const namespaceVariable = 'a';

export * as nestedNamespace from './namespace-1-b';
