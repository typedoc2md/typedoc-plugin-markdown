import { Options, OptionsReader } from 'typedoc';

export class GithubWikiThemeOptionsReader implements OptionsReader {
  priority = 1000;
  name = 'github-wiki-theme-reader';
  read(container: Options) {
    container.setValue('entryDocument', 'Home.md');
    container.setValue('hideBreadcrumbs', true);
  }
}
