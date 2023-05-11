export class NameSpaceClassA {}

export interface NamespaceInterface {
  a: string;
}

export enum NamespaceEnum {
  Value1,
  Value2,
}

export type NamespaceTypeLiteral = 'a' | 'b';

export const namespaceVariableA = 'a';
export const namespaceVariableB = 'b';

export * as _nestedNamespace from './namespace-1-b';
