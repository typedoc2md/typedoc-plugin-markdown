// @ts-check

/**
 * @type {Partial<import('typedoc').TypeDocOptions> & Partial<import('typedoc-plugin-markdown').PluginOptions>}
 */
const options = {
  entryPoints: ['../src/public-api.ts'],
  sortEntryPoints: false,
  name: 'API',
  readme: 'none',
  sort: ['required-first', 'source-order'],
  includeVersion: false,
  categoryOrder: [
    'Application',
    'Options',
    'Custom Theme',
    'Page Partials',
    'Container Partials',
    'Member Partials',
    'Comment Partials',
    'Type Partials',
    '*',
  ],
  disableSources: true,
  excludeInternal: true,
  excludeExternals: true,
  excludePrivate: true,
  categorizeByGroup: false,
  externalSymbolLinkMappings: {
    typedoc: {
      Application: 'https://typedoc.org/api/classes/Application.html',
      CommentDisplayPart:
        'https://typedoc.org/api/types/Models.CommentDisplayPart.html',
      DeclarationReflection:
        'https://typedoc.org/api/classes/Models.DeclarationReflection.html',
      DefaultThemeRenderContext:
        'https://typedoc.org/api/classes/DefaultThemeRenderContext.html',
      Options: 'https://typedoc.org/api/classes/Configuration.Options.html',
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
      TypeDocOptions: 'https://typedoc.org/api/interfaces/TypeDocOptions.html',
      UrlMapping: 'https://typedoc.org/api/classes/UrlMapping.html',
      Event: 'https://typedoc.org/api/classes/Event.html',
      ManuallyValidatedOption:
        'https://typedoc.org/api/types/Configuration.ManuallyValidatedOption.html',
      EventHooks: 'https://typedoc.org/api/classes/EventHooks.html',
    },
  },
};
module.exports = options;
