export function load(app) {
  app.converter.addUnknownSymbolResolver((ref) => {
    if (ref.moduleSource === 'typedoc') {
      const symbol = ref.symbolReference.path[0].path;
      const enums = ['ReflectionKind'];
      const configuration = [
        'DeclarationOption',
        'Options',
        'ManuallyValidatedOption',
      ];
      const types = [
        'IndexedAccessType',
        'InferredType',
        'IntersectionType',
        'IntrinsicType',
        'LiteralType',
        'NamedTupleMember',
        'ReflectionCategory',
        'RenderTemplate',
        'UnionType',
        'UnknownType',
      ];
      const interfaces = ['TypeDocOptions', 'TypeOperatorType'];
      const classes = [
        'Application',
        'DefaultThemeRenderContext',
        'Event',
        'EventHooks',
        'PageEvent',
        'ParameterReflection',
        'ProjectReflection',
        'ReferenceReflection',
        'ReferenceType',
        'Reflection',
        'ReflectionFlags',
        'ReflectionGroup',
        'ReflectionType',
        'Renderer',
        'RendererEvent',
        'SignatureReflection',
        'SomeType',
        'Theme',
        'TupleType',
        'TypeParameterReflection',
        'UrlMapping',
      ];
      const models = [
        'ArrayType',
        'Comment',
        'CommentDisplayPart',
        'ConditionalType',
        'ContainerReflection',
        'DeclarationHierarchy',
        'DeclarationReflection',
        'ProjectReflection',
        'QueryType',
      ];

      if (models.includes(symbol)) {
        return `https://typedoc.org/api/classes/Models.${symbol}.html`;
      }
      if (classes.includes(symbol)) {
        return `https://typedoc.org/api/classes/${symbol}.html`;
      }
      if (enums.includes(symbol)) {
        return `https://typedoc.org/api/enums/Models.${symbol}-1.html`;
      }
      if (interfaces.includes(symbol)) {
        return `https://typedoc.org/api/${interfaces}/TypeDocOptions.html`;
      }
      if (configuration.includes(symbol)) {
        return `https://typedoc.org/api/types/Configuration.${symbol}.html`;
      }
      if (types.includes(symbol)) {
        return `https://typedoc.org/api/types/${symbol}.DeclarationOption.html`;
      }
    }
  });
}
