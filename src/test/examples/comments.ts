/**
 * Additionally you can link to other classes, members or functions using double square brackets.
 *
 * - Link to a class: [[Animal]]
 * - Link to a function: [[buildName]]
 */

export let commentsWithSymbolLinks;

/**
 * This is an example of include
 *
 * [[include:class-example.md]]
 */
export let commentsWithIncludes;

/**
 * @name Tag description on same line
 * @description
 * Tag description on new line [[Animal]]
 * - Tag description on another line
 *
 * @deprecated
 * Another tag description
 */
export let commentsWithTags: boolean = false;

/**
 * Some comments with fence blocks
 * ```typescript
 * someFunction()
 * ```
 * ```js
 * anotherFunction()
 * ```
 */
export let commentsWithFencedBlock;

/**
 * Comments with a return definition
 * @returns Return comments
 * - Line 1 [[Animal]]
 * - Line 2
 */
export function commentsInReturn() {
  return;
}
