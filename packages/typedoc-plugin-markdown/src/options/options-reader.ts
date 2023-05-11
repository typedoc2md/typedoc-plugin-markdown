import { Options, OptionsReader } from 'typedoc';
import { TypedocPluginMarkdownOptions } from '../models';

export class MarkdownPluginOptionsReader<T = TypedocPluginMarkdownOptions>
  implements OptionsReader
{
  options: Partial<TypedocPluginMarkdownOptions>;

  name = 'custom-options';
  order = 1000;
  readonly supportsPackages = false;

  constructor(options: Partial<T>) {
    this.options = options;
  }

  read(container: Options) {
    if (this.options) {
      Object.entries(this.options).forEach(([key, value]) => {
        if (key === 'plugin') {
          const plugins = container.getValue('plugin');
          const defaultPlugins = value as string[];
          defaultPlugins.forEach((defaultPlugin) => {
            if (!plugins.includes(defaultPlugin)) {
              plugins.push(defaultPlugin);
            }
          });
          container.setValue('plugin', plugins);
        } else {
          container.setValue(key, value);
        }
      });
    }
  }
}
