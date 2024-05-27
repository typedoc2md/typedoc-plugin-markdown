/**
 * Maps a given value to the option type.
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
 * The allowed values for formatting reflections.
 */
export enum ReflectionFormat {
  List = 'list',
  Table = 'table',
  HtmlTable = 'htmlTable',
}

/**
 * The allowed values for formatting indexes.
 */
export enum IndexFormat {
  List = 'list',
  Table = 'table',
}
