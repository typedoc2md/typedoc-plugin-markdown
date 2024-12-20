/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @categoryDescription Category One
 *
 * Description for module-2 category1
 *
 * @categoryDescription Category Two
 *
 * Description for module-2 Category Two
 *
 * @module
 */
/**
 * @category Category One
 */
export function someFunction() {}

/**
 * @category Category One
 */
export class SomeClass {}

/**
 * @category Category One
 */
export interface SomeInterface {}

/**
 * @category Category One
 */
export namespace NamespaceCategoryOne {
  /**
   * @category NamespaceA Category One
   */
  export interface NamespaceInterface {}
}

/**
 * @category Category Two
 */
export function someFunction2() {}

/**
 * @category Category Two
 */
export class SomeClass2 {}

/**
 * @category Category Two
 */
export interface SomeInterface2 {}

export enum SomeEnum {}

export namespace NamespaceNoCategory {
  export interface NamespaceInterface {}
}
