/**
 * Defines option maps TypeDoc parameter Map types.
 *
 * @module
 */

/**
 * The allowed values of the `--outputFileStrategy` option.
 */
export enum OutputFileStrategy {
  Members = 'members',
  Modules = 'modules',
}

/**
 * The allowed values for formatting reflections and indexes.
 */
export enum DisplayFormat {
  List = 'list',
  Table = 'table',
  HtmlTable = 'htmlTable',
}

/**
 * The allowed values for the custom anchors format.
 */
export enum CustomAnchorsFormat {
  CurlyBrace = 'curlyBrace',
  EscapedCurlyBrace = 'escapedCurlyBrace',
  SquareBracket = 'squareBracket',
}

/**
 * The allowed values for formatting reflections and indexes.
 */
export enum TypeDeclarationVisibility {
  Compact = 'compact',
  Verbose = 'verbose',
}
