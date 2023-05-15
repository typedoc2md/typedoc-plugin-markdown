import {
  Application,
  MixedDeclarationOption,
  Options,
  OptionsReader,
  PackageJsonReader,
  ParameterType,
  TSConfigReader,
  TypeDocReader,
} from 'typedoc';
import { PluginOptions } from './models';

const DEFAULT_PLUGIN_OPTIONS: Partial<PluginOptions> = {
  id: 'default',
  docsRoot: 'docs',
  out: 'api',
  watch: false,
  plugin: [],
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  includeFileNumberPrefixes: true,
  skipIndexPage: true,
  entryFileName: 'index.md',
  sidebar: {
    categoryLabel: 'API',
    position: null,
    autoConfiguration: true,
  },
};

export function getPluginOptions(opts: Partial<PluginOptions>): PluginOptions {
  const options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...opts,
    sidebar: {
      ...DEFAULT_PLUGIN_OPTIONS.sidebar,
      ...opts.sidebar,
    },
  };
  return options as PluginOptions;
}

export function loadOptions(app: Application) {
  app.options.addReader(new PackageJsonReader());
  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());

  app.options.addDeclaration({
    name: 'sidebar',
    type: ParameterType.Mixed,
  } as MixedDeclarationOption);

  app.options.addReader(
    new (class implements OptionsReader {
      name = 'docusaurus-options';
      readonly order = 900;
      readonly supportsPackages = false;
      read(container: Options) {
        const plugins = container.getValue('plugin');
        ['typedoc-plugin-markdown', 'typedoc-plugin-frontmatter'].forEach(
          (defaultPlugin) => {
            if (!plugins.includes(defaultPlugin)) {
              plugins.push(defaultPlugin);
            }
          },
        );
        container.setValue('plugin', plugins);
      }
    })(),
  );
}
