import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function pageTitle(this: MarkdownThemeContext): string {
  const textContentMappings = this.options.getValue('textContentMappings');
  const pageTitleTemplates = this.options.getValue('pageTitleTemplates');

  const hasCustomPageTitle = this.options.isSet('pageTitleTemplates');
  const indexPageTitle = hasCustomPageTitle
    ? pageTitleTemplates['index']
    : textContentMappings['title.indexPage'];
  const modulePageTitle = hasCustomPageTitle
    ? pageTitleTemplates['module']
    : textContentMappings['title.modulePage'];
  const memberPageTitle = hasCustomPageTitle
    ? pageTitleTemplates['member']
    : textContentMappings['title.memberPage'];

  const page = this.page;

  if (
    this.urlTo(page.model) === this.urlTo(page.project) &&
    [ReflectionKind.Project, ReflectionKind.Module].includes(page.model.kind)
  ) {
    if (typeof indexPageTitle === 'string') {
      return this.helpers.getProjectName(indexPageTitle, page);
    }
    return indexPageTitle({
      projectName: page?.project?.name,
      version: page?.project?.packageVersion,
    });
  }

  const name = this.partials.memberTitle(page.model as DeclarationReflection);

  const kind = ReflectionKind.singularString(page.model.kind);

  const group = (page.model?.parent as DeclarationReflection)?.groups?.[0]
    ?.title;

  if (
    [ReflectionKind.Module, ReflectionKind.Namespace].includes(page.model.kind)
  ) {
    if (typeof modulePageTitle === 'string') {
      return getFromString(modulePageTitle, name, kind);
    }

    return modulePageTitle({
      name,
      kind,
    });
  }

  if (typeof memberPageTitle === 'string') {
    return getFromString(memberPageTitle, name, kind);
  }

  return memberPageTitle({
    name,
    kind,
    group,
  });
}

function getFromString(textContent: string, name: string, kind: string) {
  return textContent.replace('{name}', name).replace('{kind}', kind);
}
