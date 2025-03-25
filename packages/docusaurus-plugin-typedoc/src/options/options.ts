import { presets } from './presets.js';

export const DEFAULT_SIDEBAR_OPTIONS = {
  autoConfiguration: true,
  pretty: false,
  typescript: false,
  deprecatedItemClassName: 'typedoc-sidebar-item-deprecated',
};

const DEFAULT_PLUGIN_OPTIONS = {
  ...presets,
  id: 'default',
  sidebar: {
    ...DEFAULT_SIDEBAR_OPTIONS,
  },
};

export function getPluginOptions(
  context: any,
  opts: Record<string, any>,
): Record<string, any> {
  const docsPreset = context.siteConfig?.presets?.find((preset: any) =>
    Boolean(preset[1]?.docs),
  ) as any;

  const options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    siteDir: context.siteDir,
    docsPresetPath: docsPreset ? docsPreset[1]?.docs?.path : null,
    numberPrefixParser: docsPreset
      ? docsPreset[1]?.docs?.numberPrefixParser
      : null,
    ...opts,
    sidebar: {
      ...DEFAULT_PLUGIN_OPTIONS.sidebar,
      ...opts.sidebar,
    },
    plugin: [
      ...new Set([...['typedoc-plugin-markdown'], ...(opts.plugin || [])]),
    ],
  };

  return options;
}
