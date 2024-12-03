/**
 * Comments form module comments
 *
 * Thanks \@tgrey please see issue #1.
 *
 * ```js
 * const x = 1
 * ```
 *
 * @module
 */

export function some_function(param: string | boolean) {}

export interface SomeInterface<T> {
  someProp: string;
  anotherProp: T;
  somePromise: Promise<T>;
}

/**
 * - list item 1
 */
export class SomeClass<T> {
  someProp: string;
}
