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
 *
 * - {@link InterfaceB.propA}
 */
export interface InterfaceA {
  propA: string;
  propB: string;
}

/**
 * InterfaceB function.
 *
 * - {@link InterfaceA.propA}
 */
export interface InterfaceB {
  propA: string;
  propB: string;
}
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
 *
 * {@link TypeB#propB}
 */
export type TypeA = string;
/**
 * TypeB function.
 */
export type TypeB = { propA: string; propB?: number };
/**
 * Comments for functionA
 */
export function functionA() {}
export const variableA = '';
export const variableB = '';
