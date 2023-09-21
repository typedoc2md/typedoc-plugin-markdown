/**
 *
 * Comments form module comments
 *
 * ## Links
 *
 * Links using `{@link}` inline tags.
 *
 * - {@link CommentInterface} - Links to CommentInterface
 * - {@link CommentInterface.prop | Links to CommentInterface.prop}
 * - {@link CommentInterface.propb | Links to CommentInterface.propb}
 * - {@link CommentEnum.MemberB}
 * - {@link SameName:var}
 * - {@link SameName:interface}
 * - {@link SameName.prop}
 * - {@link prop:var}
 *
 * ### External link
 *
 * - {@link https://www.google.com Google}
 * - {@linkcode https://www.google.com}
 *
 * @module
 *
 * @tagA
 *
 * Comments for a tag
 *
 * @tagB Comments for tag written on same line
 *
 * ## Html And Jsx
 *
 * A <tag></tag> in comments
 *
 * Closing </element> on its own
 *
 * A `<tag>` in backticks
 *
 * ```
 * A <tag> in a code block
 * Some <p> html </p> inside codeblock
 * ```
 */

export interface CommentInterface {
  prop: string;
  propb: string;
}

export enum CommentEnum {
  /**
   * Comment for Member
   */
  Member,
  MemberB,
}

export interface SameName {
  prop: string;
  propb: string;
}
export const SameName = true;
export const prop = true;
export const propb = true;
