/*
 * THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY
 */

/**
 * Describes the options declared by the plugin.
 */
export interface PluginOptions {
  /**
   * An array of remark plugin names to be executed.
   */
  remarkPlugins?: RemarkPlugin[];

  /**
   * Custom options for the remark-stringify plugin.
   */
  remarkStringifyOptions?: Record<string, any>;
}

export type RemarkPlugin =
  | [string, Record<string, any>]
  | {
      applyTo: string[];
      plugins: [string, Record<string, any>][];
    };
