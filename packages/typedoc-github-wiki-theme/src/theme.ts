import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';

export class GithubWikiTheme extends MarkdownTheme {
  getUrls(project: ProjectReflection) {
    return super.getUrls(project).map((urlMapping) => {
      if (urlMapping.model.kind === ReflectionKind.Project) {
        return urlMapping;
      }
      return {
        ...urlMapping,
        url: this.getUrl(urlMapping.model as DeclarationReflection),
      };
    });
  }

  getUrl(reflection: DeclarationReflection) {
    const fullname = reflection.getFullName();
    const fullnameParts = fullname.split('.');
    if (reflection.kind !== ReflectionKind.Module) {
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
