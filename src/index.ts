import { Application } from 'typedoc/dist/lib/application';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';
import { MarkdownConverterPlugin } from './plugin/converterPlugin';
import { MarkdownRendererPlugin } from './plugin/rendererPlugin';

module.exports = (PluginHost: Application) => {

  const app = PluginHost.owner;

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Export to single file.',
    name: 'mdOutFile',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Suppress indexes from single file output.',
    name: 'mdHideIndexes',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Suppress file sources from output.',
    name: 'mdHideSources',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Markdown parser ie: "bitbucket"',
    name: 'mdFlavour',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    defaultValue: '',
    help: 'The repository to use for source files (ignored unless markdownFlavour is set)',
    name: 'mdSourceRepo',
    type: ParameterType.String,
  });

  app.converter.addComponent('markdown-converter', MarkdownConverterPlugin);
  app.renderer.addComponent('markdown-renderer', MarkdownRendererPlugin);

};
