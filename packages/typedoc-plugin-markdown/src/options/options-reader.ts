import { Options, OptionsReader } from 'typedoc';
import { TypedocPluginMarkdownOptions } from '../models';

export class MarkdownPluginOptionsReader implements OptionsReader {
  options: Partial<TypedocPluginMarkdownOptions>;

  name = 'custom-options';
  order = 1000;
  readonly supportsPackages = false;

  constructor(options: Partial<TypedocPluginMarkdownOptions>) {
    this.options = options;
  }

  read(container: Options) {
    if (this.options) {
      Object.entries(this.options).forEach(([key, value]) => {
        container.setValue(key, value);
      });
    }
  }
}
