// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

import { ManuallyValidatedOption } from 'typedoc';

declare module 'typedoc' {
  export interface TypeDocOptionMap {
    frontmatterGlobals: ManuallyValidatedOption<FrontmatterGlobals>;
    readmeFrontmatter: ManuallyValidatedOption<ReadmeFrontmatter>;
    indexFrontmatter: ManuallyValidatedOption<IndexFrontmatter>;
    frontmatterCommentTags: any[];
    preserveFrontmatterCommentTags: boolean;
    frontmatterNamingConvention: 'camelCase' | 'snakeCase';
  }
}

/**
 * Describes the options declared by the plugin.
 *
 * @category Options
 */
export interface PluginOptions {
  /**
   * Specify static variables to be added to all frontmatter blocks.
   */
  frontmatterGlobals: FrontmatterGlobals;

  /**
   * Specify static variables to be added to the readme page only.
   */
  readmeFrontmatter: ReadmeFrontmatter;

  /**
   * Specify static variables to be added to the index page only.
   */
  indexFrontmatter: IndexFrontmatter;

  /**
   * Specify which comment block tags should be added to frontmatter.
   */
  frontmatterCommentTags: any[];

  /**
   * Preserve tags defined in frontmatter block tags in output.
   */
  preserveFrontmatterCommentTags: boolean;

  /**
   * The naming convention that variables should be output as.
   */
  frontmatterNamingConvention: 'camelCase' | 'snakeCase';
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
