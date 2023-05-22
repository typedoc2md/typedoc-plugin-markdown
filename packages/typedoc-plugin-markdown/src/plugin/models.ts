/**
 * Models describing custom plugin options.
 * @module
 */

/**
 * Defines outputFileStrategy model for the `outputFileStrategy` option.
 *
 * @enum
 *
 */
export const OutputFileStrategy = {
  Modules: 'modules',
  Members: 'members',
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
/**
 *
 * @enum
 */
export const AnchorFormat = {
  Lowercase: 'lowercase',
  Slug: 'slug',
  None: 'none',
} as const;

export type AnchorFormat = (typeof AnchorFormat)[keyof typeof AnchorFormat];
