import { Application } from 'typedoc/dist/lib/application';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';

var plugin = require("./plugin");
module.exports = function (PluginHost: Application) {
  var app = PluginHost.owner;
  app.options.addDeclaration({ name: 'markdownSinglePage', type: ParameterType.Boolean, component:'markdown', help:'Markdown Plugin: Export to single document.' });
  app.converter.addComponent('markdown', plugin.MarkdownPlugin);
};