/*
 * THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY
 */

/**
 * Describes the options declared by the plugin.
 */
export interface PluginOptions {
  /**
   * A set of flags that control the enabling or disabling of remark plugins that are loaded by default.
   */
  defaultRemarkPlugins?: {
    gfm?: boolean;
    frontmatter?: boolean;
    mdx?: boolean;
  };

  /**
   * An array of remark plugin names to be executed.
   */
  remarkPlugins?: RemarkPlugin[];

  /**
   * Custom options for the remark-stringify plugin.
   */
  remarkStringifyOptions?: Record<string, any>;
}

export type RemarkPlugin = string | [string, Record<string, any>];
