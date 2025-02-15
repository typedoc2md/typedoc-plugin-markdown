import { DeclarationOption, ParameterType } from 'typedoc';
import { DEFAULT_SIDEBAR_OPTIONS } from './options.js';

/**
 * **autoConfiguration**
 *
 * Set to `false` to disable sidebar generation. Defaults to `true`.
 *
 * **pretty**
 *
 * Pretty format the sidebar JSON.
 *
 * **deprecatedItemClassName**
 *
 * The class name to apply to deprecated items in the sidebar. Defaults to `"typedoc-sidebar-item-deprecated"`.
 *
 * Please see the [sidebar guide](https:/typedoc-plugin-markdown.org/plugins/docusaurus/sidebar) for additional information on sidebar setup.
 *
 */
export const sidebar: Partial<DeclarationOption> = {
  help: 'Configures the autogenerated Docusaurus sidebar.',
  type: ParameterType.Mixed,
  defaultValue: DEFAULT_SIDEBAR_OPTIONS,
  validate(value) {
    if (typeof value !== 'object') {
      console.warn('[typedoc-plugin-markdown] Sidebar must be an object.');
    }
    const invalidKeys = Object.keys(value as {}).filter(
      (key) => !Object.keys(DEFAULT_SIDEBAR_OPTIONS).includes(key),
    );
    if (invalidKeys.length > 0) {
      console.warn(
        `[typedoc-plugin-markdown] Invalid keys in sidebar options: ${invalidKeys.join(', ')}`,
      );
    }
  },
};
