import { Application } from 'typedoc/dist/lib/application';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';
import { MarkdownPlugin } from './plugin';

export = (PluginHost: Application) => {
  const app = PluginHost.owner;
  if (app.converter.hasComponent('markdown')) {
    return;
  }

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: (docusaurus|gitbook|bitbucket) Specifies the markdown target.',
    name: 'platform',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Suppress file sources from output.',
    name: 'hideSources',
    type: ParameterType.Boolean,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Deprectated - use --platform.',
    name: 'mdEngine',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Deprectated - use --hideSources.',
    name: 'mdHideSources',
    type: ParameterType.Boolean,
  });

  app.converter.addComponent('markdown', new MarkdownPlugin(app.converter));
};
