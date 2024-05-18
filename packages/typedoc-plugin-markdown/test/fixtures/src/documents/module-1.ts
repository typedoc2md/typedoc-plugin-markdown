/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @document ../../docs/reflection/MODULE_DOC.md
 *
 * @module ModuleWithDocuments1
 */

/**
 * @document ../../docs/reflection/INTERFACE_DOC.md
 */
export interface InterfaceWithDocuments {
  prop: string;
}

/**
 * @document ../../docs/reflection/ENUM_DOC.md
 */
export enum EnumWithDocuments {
  EnumMember,
}

/**
 * Comments for multipleFunctionWithDocumentsA
 *
 * @document ../../docs/reflection/FUNCTION_DOC_1.md
 */
export function multipleFunctionWithDocuments(value: boolean): string;

/**
 * Comments for multipleFunctionWithDocumentsB
 *
 * @document ../../docs/reflection/FUNCTION_DOC_2.md
 */
export function multipleFunctionWithDocuments(value: string): string;

/**
 * Comments for multipleFunctionWithDocuments
 *
 * @document ../../docs/reflection/FUNCTION_DOC_3.md
 */
export function multipleFunctionWithDocuments() {
  return '';
}

/**
 * Comments for functionWithDocuments
 *
 * @document ../../docs/reflection/FUNCTION_DOC_1.md
 */
export function functionWithDocuments() {
  return '';
}

/**
 * @document ../../docs/reflection/CLASS_DOC.md
 */
export class ClassWithDocuments {}

/**
 * @document ../../docs/reflection/VARIABLE_DOC.md
 */
export const variableWithDocuments = 1;

/**
 * @document ../../docs/reflection/TYPE_DOC.md
 */
export type TypeWithDocuments = 'string';

/**
 * @document ../../docs/reflection/NAMESPACE_DOC.md
 */
export namespace NamespaceWithDocuments {
  /**
   * @document ../../docs/reflection/CLASS_DOC.md
   */
  export class NamespaceClassWithDocuments {}
}
