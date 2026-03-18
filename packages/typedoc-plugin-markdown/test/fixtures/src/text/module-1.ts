/**
 * @group SomeGroup
 *
 * @example
 *
 * ```ts
 * const someVar: SomeType = true;
 * ```
 */
export type SomeType = boolean;

/**
 * @example
 *
 * ```ts
 * const someVar: someVar = true;
 * ```
 *
 * @example
 *
 * ```ts
 * const someVar: someVar = false;
 * ```
 */
export const someVar = true;

/**
 * @group SomeOtherGroup
 */
export type SomeOtherType = boolean;
export const someOtherVar = true;
export interface SomeInterface {
  /**
   * Description for prop someProp
   */
  someProp?: boolean;
  /**
   * @eventProperty
   */
  someEvent: MouseEvent;
}

export abstract class _SomeAbstractClass_<T, V> {
  prop!: T;
  prop2!: V;
}

/**
 * @deprecated
 */
export abstract class _SomeDeprecatedAbstractClass_<T, V> {
  prop!: T;
  prop2!: V;
}
