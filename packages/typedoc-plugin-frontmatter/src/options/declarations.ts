import { DeclarationOption, ParameterType } from 'typedoc';
import { FrontmatterNamingConvention } from './maps';

/**
 *
 * ```yaml filename="YAML"
 * ---
 * layout: docs
 * sidebar: true
 * ---
 * ```
 *
 * @example  {"layout": "docs", "sidebar": true }
 */
export const frontmatterGlobals: Partial<DeclarationOption> = {
  help: 'Specify static variables to be added to all frontmatter blocks.',
  type: ParameterType.Mixed,
  defaultValue: {},
};

/**
 * @example {"onReadme": "true" }
 */
export const readmeFrontmatter: Partial<DeclarationOption> = {
  help: 'Specify static variables to be added to the readme page only.',
  type: ParameterType.Mixed,
  defaultValue: {},
};

/**
 * @example {"onIndex": "true" }
 */
export const indexFrontmatter: Partial<DeclarationOption> = {
  help: 'Specify static variables to be added to the index page only.',
  type: ParameterType.Mixed,
  defaultValue: {},
};

/**
 * Frontmatter variables can be added by extracting comments from block (@) tags.
 *
 * Please note tags must be added to the comment blocks of the symbol exported to a page.
 *
 *  ```ansi filename="Block Tags (someModule.ts)"
 *  \/**
 *  * \@author Joe Bloggs
 *  *
 *  * \@description A description that will be added to frontmatter.
 *  *\/
 *  ```
 *
 * ```yaml filename="YAML (someModule.md)"
 * ---
 * author: Joe Bloggs
 * description: A description that will be added to frontmatter.
 * ---
 * ```
 *
 * In addition any non standard tags should be added to a `tsdoc.json` file and added next to your `tsconfig.json` file.
 *
 * ```json filename="tsdoc.json"
 * {
 *   "$schema": "https://developer.microsoft.com/en-us/json-schemas/tsdoc/v0/tsdoc.schema.json",
 *   "extends": ["typedoc/tsdoc.json"],
 *   "tagDefinitions": [
 *       {
 *           "tagName": "@author",
 *           "syntaxKind": "modifier"
 *       }
 *   ]
 * }
 * ```
 *
 * @example ["author", "description"]
 */
export const frontmatterCommentTags: Partial<DeclarationOption> = {
  help: 'Specify which comment block tags should be added to frontmatter.',
  type: ParameterType.Array,
};

export const preserveFrontmatterCommentTags: Partial<DeclarationOption> = {
  help: 'Preserve tags defined in frontmatter block tags in output.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * Block tags have to be written in camelCase (see [tsdoc.org](https://tsdoc.org/pages/spec/tag_kinds)).
 *
 * This option can configure the output style of frontmatter variables when written to YAML.
 */
export const frontmatterNamingConvention: Partial<DeclarationOption> = {
  help: 'The naming convention that variables should be output as. ',
  type: ParameterType.Map,
  map: FrontmatterNamingConvention,
  defaultValue: FrontmatterNamingConvention.CamelCase,
};
