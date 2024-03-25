// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

import { ManuallyValidatedOption } from 'typedoc';

declare module 'typedoc' {
  export interface TypeDocOptionMap {
    remarkPlugins: ManuallyValidatedOption<RemarkPlugins>;
  }
}

/**
 * Describes the options declared by the plugin.
 *
 * @category Options
 */
export interface PluginOptions {
  /**
   * An array of remark plugin names.
   */
  remarkPlugins: RemarkPlugins;
}

/**
 *
 *
 * @category Options
 */
export interface RemarkPlugins {}
