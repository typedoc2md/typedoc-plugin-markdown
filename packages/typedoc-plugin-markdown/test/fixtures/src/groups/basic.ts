/**
 * A basic module
 *
 * @module
 */

/**
 * Interface A comments line 1
 * and comments on a soft line.
 *
 * Comments on double new line.
 *
 * ```typescript
 * const a = new InterfaceA();
 * ```
 *
 * @remarks
 *
 * Block tag content.
 */
export interface InterfaceA {
  propA: string;
  propB: string;
}

/**
 * InterfaceB function.
 */
export interface InterfaceB {}
/**
 * EnumA function.
 */
export enum EnumA {}
export enum EnumB {}
/**
 * ClassA function.
 */
export class ClassA {}
export class ClassB {}
/**
 * TypeA function.
 */
export type TypeA = string;
/**
 * TypeB function.
 *
 * @param str - A string to tokenize.
 * @param offset - Initial offset. Used when composing lexers.
 */
export type TypeB = (str: string, offset?: number) => any;
/**
 * functionA function.
 */
export function functionA() {}
export const variableA = '';
export const variableB = '';
