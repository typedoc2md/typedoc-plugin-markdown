import { ProjectReflection, Renderer, UrlMapping } from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';

export class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);
  }

  override getUrls(project: ProjectReflection): UrlMapping<any>[] {
    console.log('GET URLS');
    // console.log(super.getUrls(project));
    return super.getUrls(project);
  }
}
