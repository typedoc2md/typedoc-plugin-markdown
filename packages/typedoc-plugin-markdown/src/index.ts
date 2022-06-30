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
    help: '[Markdown Plugin] Do not render page title.',
    name: 'hidePageTitle',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Do not render breadcrumbs in template.',
    name: 'hideBreadcrumbs',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids. Should be set for Bitbucket Server docs.',
    name: 'namedAnchors',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] The file name of the entry document.',
    name: 'entryDocument',
    type: ParameterType.String,
    defaultValue: 'README.md',
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Do not render in-page table of contents items.',
    name: 'hideInPageTOC',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Preserve anchor casing when generating links.',
    name: 'preserveAnchorCasing',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'hasOwnDocument',
    help: "Specifies which symbols should contain their own document. Values 'None', 'All' OR Array of ['class', 'interface', 'enum', 'function', 'variable', 'type']",
    type: ParameterType.Array,
  });
}

export { MarkdownTheme, MarkdownThemeRenderContext };
