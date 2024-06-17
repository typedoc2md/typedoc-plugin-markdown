/**
 *
 * Comments form module comments
 *
 * Links using `{@link}` inline tags.
 *
 * - {@link CommentInterface} - Links to CommentInterface
 * - {@link CommentInterface.prop | Links to CommentInterface.prop}
 * - {@link CommentInterface.propb | Links to CommentInterface.propb}
 *
 */

export interface CommentInterface<T> {
  prop: string;
  propb: T;
}

export interface CommentInterfaceExtended
  extends CommentInterface<CommentEnum> {
  propc: string;
}

export enum CommentEnum {
  Member,
  MemberB,
}
