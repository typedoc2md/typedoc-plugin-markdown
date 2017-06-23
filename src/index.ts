import { Application } from 'typedoc/dist/lib/application';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';
import { MarkdownConverterPlugin } from './plugin/converterPlugin';
import { MarkdownRendererPlugin } from './plugin/rendererPlugin';

module.exports = (PluginHost: Application) => {

  const app = PluginHost.owner;

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Export to single document.',
    name: 'markdownOutFile',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Remove index from output.',
    name: 'markdownSuppressIndexes',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Markdown parser ie: "bitbucket"',
    name: 'markdownFlavour',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    defaultValue: '',
    help: 'The repository to use for source files (ignored unless markdownFlavour is set)',
    name: 'markdownSourceRepo',
    type: ParameterType.String,
  });

  app.converter.addComponent('markdown-converter', MarkdownConverterPlugin);
  app.renderer.addComponent('markdown-renderer', MarkdownRendererPlugin);

};
