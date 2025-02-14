/*
 * THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY
 */
import { ToStringOptions } from 'yaml';
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
  frontmatterGlobals: Record<string, any>;

  /**
   * The naming convention that variables should be output as.
   */
  frontmatterNamingConvention: 'camelCase' | 'snakeCase';

  /**
   * Specify static variables to be added to the index page only.
   */
  indexFrontmatter: Record<string, any>;

  /**
   * Preserve tags defined in frontmatter block tags in output.
   */
  preserveFrontmatterCommentTags: boolean;

  /**
   * Specify static variables to be added to the readme page only.
   */
  readmeFrontmatter: Record<string, any>;

  /**
   * Options to pass into `yaml.stringify()`.
   */
  yamlStringifyOptions: ToStringOptions;
}
