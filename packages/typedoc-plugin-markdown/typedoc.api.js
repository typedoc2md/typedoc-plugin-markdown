module.exports = {
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-mdn-links'],
  tsconfig: './tsconfig.json',
  entryPoints: [
    './src/plugin/bootstrap.ts',
    './src/plugin/renderer.ts',
    './src/plugin/models.ts',
    './src/theme/definition/index.ts',
    './src/theme/resources/index.ts',
    './src/theme/helpers.ts',
    './src/theme/models.ts',
    './src/support/elements.ts',
    './src/support/utils.ts',
  ],
  disableSources: true,
  excludeExternals: true,
  sort: ['instance-first', 'required-first'],
  kindSortOrder: ['Function'],
  categoryOrder: ['Templates', 'Partials'],
  excludeReferences: true,
  categorizeByGroup: false,
  excludePrivate: false,
  readme: 'none',
  githubPages: false,
  includeVersion: true,
  hideGenerator: true,
  externalSymbolLinkMappings: {
    ['@types/prettier']: {
      Options: 'https://prettier.io/docs/en/options.html',
    },
    typedoc: {
      Application: 'https://typedoc.org/api/classes/Application.html',
      CommentDisplayPart:
        'https://typedoc.org/api/types/Models.CommentDisplayPart.html',
      DeclarationReflection:
        'https://typedoc.org/api/classes/Models.DeclarationReflection.html',
      DefaultThemeRenderContext:
        'https://typedoc.org/api/classes/DefaultThemeRenderContext.html',
      Options: 'https://typedoc.org/api/classes/Options.html',
      PageEvent: 'https://typedoc.org/api/classes/PageEvent.html',
      ProjectReflection:
        'https://typedoc.org/api/classes/Models.ProjectReflection.html',
      Renderer: 'https://typedoc.org/api/classes/Renderer.html',
      RendererEvent: 'https://typedoc.org/api/classes/RendererEvent.html',
      RenderTemplate: 'https://typedoc.org/api/types/RenderTemplate.html',
      Reflection: 'https://typedoc.org/api/classes/Models.Reflection.html',
      ReflectionGroup:
        'https://typedoc.org/api/classes/Models.ReflectionGroup.html',
      Theme: 'https://typedoc.org/api/classes/Theme.html',
      UrlMapping: 'https://typedoc.org/api/classes/UrlMapping.html',
    },
  },
  excludeGroups: true,
  hideInPageTOC: true,
  hidePageHeader: true,
  identifiersAsCodeBlocks: true,
  outputFileStrategy: 'modules',
  tocFormat: 'table',
};
