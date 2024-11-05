import { ParameterType } from 'typedoc';
import { DEFAULT_SIDEBAR_OPTIONS } from '../options.js';

/**
 *
 * If TypeDoc is run from outside of the VitePress project root directory, then `docsRoot` should be set to the path of the VitePress root directory.
 *
 * e.g. the following file structure:
 *
 * ```
 *   ├── package.json
 *   ├── typedoc.json
 *   └── docs/
 *       └── .vitepress/
 *       └── typedoc-api/
 *           └── index.md
 * ```
 *
 * Requires the following config:
 *
 * ```json filename="typedoc.json"
 * {
 *    "out": "./docs/typedoc-api",
 *    "docsRoot": "./docs",
 * }
 * ```
 */
export const docsRoot = {
  help: 'The path to the VitePress project root.',
  type: ParameterType.Path,
  defaultValue: './',
};

/**
 * **sidebar.autoConfiguration**
 *
 * Set to `false` to disable sidebar generation. Defaults to true.
 *
 * **sidebar.format**
 *
 * Enables backward compatibility with VuePress. Available options [`"vitepress"`, `"vuepress1"`, `"vuepress2"`]. Defaults to `"vitepress"`.
 *
 * **sidebar.collapsed**
 *
 * Determines if sidebar items with children are open or closed. Set `collapsed` to `false` to set sidebar items as open by default.
 *
 * https://vitepress.dev/reference/default-theme-sidebar#collapsible-sidebar-groups
 *
 * **sidebar.pretty**
 *
 * Pretty format the sidebar JSON.
 *
 */
export const sidebar = {
  help: 'Configures the autogenerated VitePress sidebar.',
  type: ParameterType.Mixed,
  defaultValue: DEFAULT_SIDEBAR_OPTIONS,
};
