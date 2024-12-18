export interface InterfaceWithChars<T> {
  prop: T;
  '>': string;
  '<': string;
  '<tag>': string;
}

export class ClassWithChars<T> {
  prop!: T;
}

export const variableWithChars = {
  ['<x>']: '>',
  ['<y>']: '<',
  ['<z>']: '<tag>',
};

/**
 * ```ts
 * reallyUgly    (
 * javascript
 *  )
 * ```
 *
 * ```ts
 * const originalSingleQuote = 'hello'
 * const originalDoubleQuote = "hello"
 * ```
 *
 *```css
 *.h1 {     color : red }
 *```
 */
export function some_prettier_function(param: string) {
  return param;
}

export type SomePrettierTypeAlias = string | { x: 1 } | boolean | { y: 2 };
