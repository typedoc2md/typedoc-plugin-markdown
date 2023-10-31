import { Application, ParameterType } from 'typedoc';

export function declareOptions(app: Application) {
  app.options.addDeclaration({
    name: 'frontmatterGlobals',
    help: '[typedoc-plugin-frontmatter] Specify static variables to be added to all frontmatter.',
    type: ParameterType.Mixed,
    defaultValue: {},
  });

  app.options.addDeclaration({
    name: 'frontmatterTags',
    help: '[typedoc-plugin-frontmatter] Specify which file comment tags should be added to frontmatter.',
    type: ParameterType.Array,
    defaultValue: [],
  });

  app.options.addDeclaration({
    name: 'frontmatterTagsToSnakeCase',
    help: '[typedoc-plugin-frontmatter] Jsdoc tags cannot be snake case. Tags by default must be camelCase',
    type: ParameterType.Boolean,
    defaultValue: false,
  });
}
