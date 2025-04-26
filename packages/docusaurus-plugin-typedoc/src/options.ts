import * as path from 'path';
import { TypeDocOptions } from 'typedoc';
import { PluginOptions } from './types/plugin.js';

export function getPluginOptions(
  context: any,
  opts: Partial<PluginOptions & TypeDocOptions>,
): Record<string, any> {
  const docsPreset = context.siteConfig?.presets?.find((preset: any) =>
    Boolean(preset[1]?.docs),
  ) as any;
  const docsPresetPath = docsPreset
    ? docsPreset[1]?.docs?.path || './docs'
    : './docs';
  const options = {
    out: './docs/api',
    docsPath: path.join(context.siteDir, docsPresetPath),
    numberPrefixParser: docsPreset
      ? (docsPreset[1]?.docs?.numberPrefixParser ?? true)
      : true,
    ...opts,
    plugin: [
      ...new Set([
        ...['typedoc-plugin-markdown', 'typedoc-docusaurus-theme'],
        ...(opts.plugin || []),
      ]),
    ],
  };
  return options;
}
