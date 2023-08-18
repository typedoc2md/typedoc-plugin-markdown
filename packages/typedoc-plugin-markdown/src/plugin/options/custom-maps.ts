/**
 * Defines outputFileStrategy model for the `outputFileStrategy` option.
 *
 * @enum
 *
 */
export const OutputFileStrategy = {
  Members: 'members',
  Modules: 'modules',
} as const;

export type OutputFileStrategy =
  (typeof OutputFileStrategy)[keyof typeof OutputFileStrategy];
/**
 *
 * @enum
 */
export const FormatStyle = {
  List: 'list',
  Table: 'table',
} as const;

export type FormatStyle = (typeof FormatStyle)[keyof typeof FormatStyle];
