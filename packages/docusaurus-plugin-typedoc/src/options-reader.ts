import { Options, OptionsReader } from 'typedoc';

export class MarkdownThemeOptionsReader implements OptionsReader {
  name = 'markdown-theme-reader';
  readonly order = 1000;
  readonly supportsPackages = false;
  read(container: Options) {
    container.setValue('theme', 'markdown');
  }
}
