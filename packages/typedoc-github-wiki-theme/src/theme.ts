import {
  DeclarationReflection,
  ProjectReflection,
  Reflection,
  ReflectionKind,
} from 'typedoc';
import {
  MarkdownPageEvent,
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';
import { UrlMapping } from 'typedoc-plugin-markdown/dist/plugin/url-mapping';

export class GithubWikiTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: MarkdownPageEvent<Reflection>) {
    return new ThemeRenderContext(this, pageEvent, this.application.options);
  }

  getUrls(project: ProjectReflection): UrlMapping<any>[] {
    return super.getUrls(project).map((urlMapping) => {
      if (urlMapping.model.kindOf(ReflectionKind.Project)) {
        return urlMapping;
      }
      return {
        ...urlMapping,
        url: this.getUrl(urlMapping.model),
      };
    });
  }

  getUrl(reflection: DeclarationReflection) {
    const fullname = reflection.getFullName();
    const fullnameParts = fullname.split('.');
    if (!reflection.kindOf(ReflectionKind.Module)) {
      fullnameParts.splice(
        fullnameParts.length - 1,
        0,
        ReflectionKind.singularString(reflection.kind).split(' ')[0],
      );
    }
    const url = `${fullnameParts.join('.')}.md`;
    reflection.url = url;
    return url;
  }
}

class ThemeRenderContext extends MarkdownThemeRenderContext {
  override parseUrl(url: string) {
    return encodeURI('../wiki/' + url.replace('.md', ''));
  }
}
