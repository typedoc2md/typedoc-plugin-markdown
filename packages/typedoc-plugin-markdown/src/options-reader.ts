import { Options, OptionsReader } from 'typedoc';

export class MarkdownThemeOptionsReader implements OptionsReader {
  priority = 1000;
  name = 'markdown-theme-reader';
  read(container: Options) {
    if (container.getValue('theme') === 'default') {
      container.setValue('theme', 'markdown');
    }
  }
}
