import { Application } from 'typedoc/dist/lib/application';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';
import { MarkdownPlugin } from './plugin';

module.exports = (PluginHost: Application) => {
  const app = PluginHost.owner;
  const options = {
    component: 'markdown',
    help: 'Markdown Plugin: Export to single document.',
    name: 'markdownSinglePage',
    type: ParameterType.Boolean,
    };
  app.options.addDeclaration(options);
  app.converter.addComponent('markdown', MarkdownPlugin);
};
