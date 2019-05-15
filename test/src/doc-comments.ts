/**
 * Additionally you can link to other classes, members or functions using double square brackets.
 *
 * Link to a class: [[BaseClass]]
 * Link to a function: [[createSomething]]
 * Link to a function: [[color]]
 */

export const generalComments: boolean = false;

/**
 * @name AbstractMetadataModule
 * @description
 * Provides the module for the [[BaseClass]]
 * ```json
 * {
 *  "declarations": ["AbstractMetadataComponent"],
 *  "exports": ["AbstractMetadataComponent"],
 *  "imports": [
 *    "IonicModule",
 *    "StackIonSelectModule"
 *  ],
 *  "providers": []
 * }
 * ```
 */
export const commentsWithTags: boolean = false;

/**
 * Some deprecation
 * @deprecated
 * ```typescript
 * somethingElse();
 * ```
 */
export function foo(): void {
  return;
}

/**
 * bar method.
 *
 * Doc outside tag
 * - Line 1 [[Option]]
 * - Line 2 [[Option]]
 *
 * @returns Doc inside tag
 * - Line 1 [[Option]]
 * - Line 2 [[Option]]
 */
function bar (o: Option): void {
}

/** Option for bar() */
type Option = 'One' | 'Two';