import { Options, OptionsReader } from 'typedoc';

export class GithubWikiThemeOptionsReader implements OptionsReader {
  name = 'typedoc-github-wiki-theme-reader';
  readonly order = 900;
  readonly supportsPackages = false;
  read(container: Options) {
    if (container.getValue('theme') === 'default') {
      container.setValue('theme', 'github-wiki');
      container.setValue('flattenOutputFiles', true);
    }
  }
}
