// @ts-check

const { ReflectionCategory, IndexedAccessType } = require('typedoc');

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
    'Theme',
    'Options',
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
  navigation: {
    includeCategories: true,
    includeGroups: false,
  },
  externalSymbolLinkMappings: {
    typedoc: {
      ArrayType: 'https://typedoc.org/api/types/Models.ArrayType.html',
      Application: 'https://typedoc.org/api/classes/Application.html',
      Comment: 'https://typedoc.org/api/types/Models.Comment.html',
      CommentDisplayPart:
        'https://typedoc.org/api/types/Models.CommentDisplayPart.html',
      ConditionalType:
        'https://typedoc.org/api/types/Models.ConditionalType.html',
      ContainerReflection:
        'https://typedoc.org/api/classes/Models.ContainerReflection.html',
      DeclarationHierarchy:
        'https://typedoc.org/api/classes/Models.DeclarationHierarchy.html',
      DeclarationReflection:
        'https://typedoc.org/api/classes/Models.DeclarationReflection.html',
      DefaultThemeRenderContext:
        'https://typedoc.org/api/classes/DefaultThemeRenderContext.html',
      Event: 'https://typedoc.org/api/classes/Event.html',
      EventHooks: 'https://typedoc.org/api/classes/EventHooks.html',
      IndexedAccessType:
        'https://typedoc.org/api/types/Models.IndexedAccessType.html',
      InferredType: 'https://typedoc.org/api/types/Models.InferredType.html',
      IntersectionType:
        'https://typedoc.org/api/types/Models.IntersectionType.html',
      IntrinsicType: 'https://typedoc.org/api/types/Models.IntrinsicType.html',
      LiteralType: 'https://typedoc.org/api/types/Models.LiteralType.html',
      NamedTupleMember:
        'https://typedoc.org/api/types/Models.NamedTupleMember.html',
      ManuallyValidatedOption:
        'https://typedoc.org/api/types/Configuration.ManuallyValidatedOption.html',
      Options: 'https://typedoc.org/api/classes/Configuration.Options.html',
      PageEvent: 'https://typedoc.org/api/classes/PageEvent.html',
      ParameterReflection:
        'https://typedoc.org/api/classes/Models.ParameterReflection.html',
      ProjectReflection:
        'https://typedoc.org/api/classes/Models.ProjectReflection.html',
      ReferenceReflection:
        'https://typedoc.org/api/classes/Models.ReferenceReflection.html',
      ReferenceType:
        'https://typedoc.org/api/classes/Models.ReferenceType.html',
      Renderer: 'https://typedoc.org/api/classes/Renderer.html',
      RendererEvent: 'https://typedoc.org/api/classes/RendererEvent.html',
      RenderTemplate: 'https://typedoc.org/api/types/RenderTemplate.html',
      Reflection: 'https://typedoc.org/api/classes/Models.Reflection.html',
      ReflectionCategory:
        'https://typedoc.org/api/types/Models.ReflectionCategory.html',
      ReflectionFlags:
        'https://typedoc.org/api/classes/Models.ReflectionFlags.html',
      ReflectionGroup:
        'https://typedoc.org/api/classes/Models.ReflectionGroup.html',
      ReflectionKind:
        'https://typedoc.org/api/enums/Models.ReflectionKind-1.html',
      ReflectionType:
        'https://typedoc.org/api/classes/Models.ReflectionType.html',
      SignatureReflection:
        'https://typedoc.org/api/classes/Models.SignatureReflection.html',
      SomeType: 'https://typedoc.org/api/classes/Models.SomeType.html',
      TypeParameterReflection:
        'https://typedoc.org/api/classes/Models.TypeParameterReflection.html',
      Theme: 'https://typedoc.org/api/classes/Theme.html',
      TypeDocOptions: 'https://typedoc.org/api/interfaces/TypeDocOptions.html',
      TypeOperatorType:
        'https://typedoc.org/api/interfaces/TypeOperatorType.html',
      TupleType: 'https://typedoc.org/api/classes/Models.TupleType.html',
      QueryType: 'https://typedoc.org/api/types/Models.QueryType.html',
      UnknownType: 'https://typedoc.org/api/types/Models.UnknownType.html',
      UnionType: 'https://typedoc.org/api/types/Models.UnionType.html',
      UrlMapping: 'https://typedoc.org/api/classes/UrlMapping.html',
    },
  },
};
module.exports = options;
