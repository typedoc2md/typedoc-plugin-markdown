/**
 *
 * Comments form module comments
 *
 * @module
 *
 * @overview
 *
 * Module comments with a link http://www.google.com
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
 * Comments
 *
 * thanks \@tgreyuk for the great work
 *
 *
 *
 * lots of space with external link http://www.google.com
 *
 * see issue #1
 */
export const __comments_For_Remark__ = true;

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
 * - Tag description with bullet
 * - Tag description with bullet
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

/**
 * Creates an integer expression for the end of an interval variable.
 *
 * @remarks
 *
 * If the interval is absent then the resulting expression is also absent.
 *
 * @example
 *
 * In the following example we constraint interval variable `y` to start after end of `y` with a delay at least 10. In addition we constrain length of `x` to be less or equal than length of `y`.
 *
 * ```ts
 * let model = new CP.Model;
 * ```
 *
 * When `x` or `y` is _absent_ then value of both constraints above is _absent_ and therefore they are satisfied.
 *
 */
export function functionWithSummaryAndTags(arg: string | boolean) {
  return '';
}
