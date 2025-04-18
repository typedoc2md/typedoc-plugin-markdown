import { ParameterType } from 'typedoc';
import { DEFAULT_SIDEBAR_OPTIONS } from '../options.js';

/**
 * **sidebar.autoConfiguration**
 *
 * Set to `false` to disable sidebar generation. Defaults to true.
 *
 * **sidebar.heading**
 *
 * The heading displayed above the sidebar.
 *
 */
export const sidebar = {
  help: 'Configures the autogenerated `_Sidebar.md file`.',
  type: ParameterType.Mixed,
  defaultValue: DEFAULT_SIDEBAR_OPTIONS,
};
