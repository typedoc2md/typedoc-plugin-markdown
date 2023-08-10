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
  };
  return options;
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
        const requiredPlugins = [
          'typedoc-plugin-markdown',
          'typedoc-plugin-frontmatter',
        ];
        const plugins = container.getValue('plugin');
        container.setValue('plugin', [
          ...new Set([...requiredPlugins, ...plugins]),
        ]);
      }
    })(),
  );
}
