import { Application, Options, OptionsReader, ParameterType } from 'typedoc';
import { MarkdownTheme } from './theme';
import { MarkdownThemeRenderContext } from './theme-context';

export function load(app: Application) {
  app.renderer.defineTheme('markdown', MarkdownTheme);
  app.options.addReader(
    new (class implements OptionsReader {
      priority = 1000;
      name = 'markdown-theme-reader';
      read(container: Options) {
        if (container.getValue('theme') === 'default') {
          container.setValue('theme', 'markdown');
        }
      }
    })(),
  );

  app.options.addDeclaration({
    name: 'hidePageTitle',
    help: '[Markdown Plugin] Do not render page title.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'hideBreadcrumbs',
    help: '[Markdown Plugin] Do not render breadcrumbs in template.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'namedAnchors',
    help: '[Markdown Plugin] Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids. Should be set for Bitbucket Server docs.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'entryDocument',
    help: '[Markdown Plugin] The file name of the entry document.',
    type: ParameterType.String,
    defaultValue: 'README.md',
  });

  app.options.addDeclaration({
    name: 'hideInPageTOC',
    help: '[Markdown Plugin] Do not render in-page table of contents items.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'fileStructure',
    help: '[Markdown Plugin] Specifies how the filesystem should be standard. Hierarchical builds directories as per file system.',
    type: ParameterType.String,
    defaultValue: 'all',
  });

  app.options.addDeclaration({
    name: 'symbolsWithOwnFile',
    help: "[Markdown Plugin] Specifies which symbols are contained in their own file. Values 'none', 'all' OR Array of ['class', 'interface', 'enum', 'function', 'variable', 'type']",
    type: ParameterType.String | ParameterType.Array,
    defaultValue: 'all',
  });

  app.options.addDeclaration({
    name: 'preserveAnchorCasing',
    help: '[Markdown Plugin] Preserve anchor casing when generating links.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'typeDeclarationStyle',
    help: '[Markdown Plugin] Specify the Type Declaration Render Style',
    type: ParameterType.String,
    defaultValue: 'list',
    validate: (x) => {
      const availableValues = ['table', 'list'];
      if (!availableValues.includes(x)) {
        throw new Error(
          `Wrong value for objectLiteralTypeDeclarationStyle, the expected value is one of ${availableValues}`,
        );
      }
    },
  });
}

export * from './models';
export { MarkdownTheme, MarkdownThemeRenderContext };
