// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

import { ManuallyValidatedOption } from 'typedoc';

declare module 'typedoc' {
  export interface TypeDocOptionMap {
    frontmatterCommentTags: any[];
    frontmatterGlobals: ManuallyValidatedOption<FrontmatterGlobals>;
    frontmatterNamingConvention: 'camelCase' | 'snakeCase';
    indexFrontmatter: ManuallyValidatedOption<IndexFrontmatter>;
    preserveFrontmatterCommentTags: boolean;
    readmeFrontmatter: ManuallyValidatedOption<ReadmeFrontmatter>;
  }
}

/**
 * Describes the options declared by the plugin.
 *
 * @category Options
 */
export interface PluginOptions {
  /**
   * Specify which comment block tags should be added to frontmatter.
   */
  frontmatterCommentTags: any[];

  /**
   * Specify static variables to be added to all frontmatter blocks.
   */
  frontmatterGlobals: FrontmatterGlobals;

  /**
   * The naming convention that variables should be output as.
   */
  frontmatterNamingConvention: 'camelCase' | 'snakeCase';

  /**
   * Specify static variables to be added to the index page only.
   */
  indexFrontmatter: IndexFrontmatter;

  /**
   * Preserve tags defined in frontmatter block tags in output.
   */
  preserveFrontmatterCommentTags: boolean;

  /**
   * Specify static variables to be added to the readme page only.
   */
  readmeFrontmatter: ReadmeFrontmatter;
}

/**
 *
 *
 * @category Options
 */
export interface FrontmatterGlobals {}

/**
 *
 *
 * @category Options
 */
export interface ReadmeFrontmatter {}

/**
 *
 *
 * @category Options
 */
export interface IndexFrontmatter {}
