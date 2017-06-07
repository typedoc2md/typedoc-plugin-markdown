import { Application } from 'typedoc/dist/lib/application';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';
import { MarkdownPlugin } from './plugin';

module.exports = (PluginHost: Application) => {
  const app = PluginHost.owner;
  /*
  app.options.addDeclaration({
    component: 'markdown',
    help: 'Markdown Plugin: Export to single document.',
    name: 'markdownSinglePage',
    type: ParameterType.Boolean,
  });
  */
  app.options.addDeclaration({
    component: 'markdown',
    defaultValue: 'github',
    help: 'Markdown Plugin: Flavour - "github" or "bitbucket"',
    name: 'markdownFlavour',
    type: ParameterType.String,
  });
  app.options.addDeclaration({
    component: 'markdown',
    defaultValue: '',
    help: 'Markdown Plugin: Repository source file foott',
    name: 'markdownSourcefilePrefix',
    type: ParameterType.String,
  });
  app.converter.addComponent('markdown', MarkdownPlugin);
};
