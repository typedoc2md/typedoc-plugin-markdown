import presets from './options/presets';

export const DEFAULT_SIDEBAR_OPTIONS = {
  autoConfiguration: true,
  pretty: false,
  filteredIds: [],
};

const DEFAULT_PLUGIN_OPTIONS = {
  ...presets,
  id: 'default',
  sidebar: {
    ...DEFAULT_SIDEBAR_OPTIONS,
  },
};

export function getPluginOptions(
  opts: Record<string, any>,
): Record<string, any> {
  const options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...opts,
    sidebar: {
      ...DEFAULT_PLUGIN_OPTIONS.sidebar,
      ...opts.sidebar,
    },
    plugin: [
      ...new Set([...DEFAULT_PLUGIN_OPTIONS.plugin, ...(opts.plugin || [])]),
    ],
  };
  return options;
}
