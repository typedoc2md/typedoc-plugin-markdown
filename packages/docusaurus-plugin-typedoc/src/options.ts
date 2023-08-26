import { Application } from 'typedoc';

const DEFAULT_PLUGIN_OPTIONS = {
  id: 'default',
  docsRoot: 'docs',
  out: 'api',
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  githubPages: false,
  includeFileNumberPrefixes: true,
  entryFileName: 'index.md',
  sidebar: {
    autoConfiguration: true,
  },
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-frontmatter'],
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

export function setOptions(app: Application, options: any) {
  for (const [key, val] of Object.entries(options)) {
    app.options.setValue(key as never, val as never);
  }
}
