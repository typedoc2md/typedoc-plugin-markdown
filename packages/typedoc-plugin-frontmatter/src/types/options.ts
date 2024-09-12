/*
 * THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY
 */
/**
 * Describes the options declared by the plugin.
 */
export interface PluginOptions {
  /**
   * Specify which comment block tags should be added to frontmatter.
   */
  frontmatterCommentTags: string[];

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
 */
export interface FrontmatterGlobals {}

/**
 *
 */
export interface IndexFrontmatter {}

/**
 *
 */
export interface ReadmeFrontmatter {}
