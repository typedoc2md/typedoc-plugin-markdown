/**
 *
 * Comments form module comments
 *
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
 * Also, check out {@link https://www.google.com Google} and
 * {@link https://github.com GitHub}.
 *
 * Taken from [JsDoc](http://usejsdoc.org/tags-inline-link.html).
 */

export const commentsWithSymbolLinks = true;

/**
 * A <tag></tag> in comments
 *
 * Closing </element>
 *
 * A `<tag>` in backticks
 *
 * <p>Some HTML</p>
 *
 * <img src="http://via.placeholder.com/50x50" />
 *
 * <ul>
 * <li>html list item</li>
 * </ul>
 *
 * ```
 * A <tag> in a code block
 * Some <p> html </p> inside codeblock
 * ```
 */

export const commentsWithMarkup = true;

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
