/**
 * Comments form module comments
 *
 * Thanks \@tgrey please see issue #1.
 *
 * ```js
 * reallyUgly    (
 * javascript
 *  )
 * ```
 *
 *```css
 *.h1 {     color : red }
 *```
 *
 * @module
 */

export const __variable_with_underscores__ = true;
export function some_function(param: string | boolean) {}

export interface SomeInterface<T> {
  someProp: string;
  anotherProp: T;
}

/**
 * - list item 1
 */
export class SomeClass<T> {
  someProp: string;
}
