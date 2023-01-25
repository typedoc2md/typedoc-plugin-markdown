/**
 * @module
 *
 * @overview
 *
 * Module comments
 *
 * @author Joe Bloggs
 *
 * @description Some description used in frontmatter
 *
 */

/**
 * See {@linkcode CommentClass} and CommentClass's {@link CommentClass.comment} property.
 * Also, check out {@link https://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 *
 * Taken from [JsDoc](http://usejsdoc.org/tags-inline-link.html).
 */
export const commentWithDocLinks = true;

/**
 * Additionally you can link to other classes, members or functions using double square brackets.
 *
 * - Link to an external reflection: [[CommentClass]]
 * - Link to an internal reflection: [[commentsInReturn]]
 * - Link to an undefined reflection: [[VOID]]
 */

export const commentsWithSymbolLinks = true;

/**
 * <p>
 * You can write <strong>HTML</strong> tags directly in comments
 * </p>
 * <ul>
 * <li>List item</li>
 * </ul>
 */
export const commentsWithHTML = true;

/**
 * This is an example of include
 *
 * [[include:class-example.md]]
 *
 * This is an example of handlebars include
 *
 * [[include:class-example.hbs]]
 */
export const commentsWithIncludes = true;

/**
 * @description
 * Tag description on new line
 *
 * - Tag description on another line
 *
 * @deprecated
 * Another tag description
 *
 * Gets the application version.
 * @example
 * ```typescript
 * import { getVersion } from '@tauri-apps/api/app';
 * const appVersion = await getVersion();
 * ```
 */
export const commentsWithTags = true;

/**
 * Some comments with fence blocks
 *
 * ```typescript
 * someFunction()
 * ```
 *
 * ```js
 * anotherFunction()
 * ```
 */
export const commentsWithFencedBlock = true;

/**
 * Comments with a return definition
 * @returns Return comments
 */
export function commentsInReturn() {
  return;
}

/**
 * Comment for class
 */
export class CommentClass {
  /**
   * Comment for property
   */
  comment: string;
  /**
   * Comment for constructor
   */
  constructor(comment: string) {
    this.comment = comment;
  }
  /**
   * Comment for method
   */
  getComment() {
    return 'Comment';
  }
}

/**
 * Some comments
 */
export type literalWithBlockComments = {
  /**
   * Comment for prop
   */
  prop: string;
};
