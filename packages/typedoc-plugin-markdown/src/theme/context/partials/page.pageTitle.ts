import { strikeThrough } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/escape-chars.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { PageTitleTemplatePlaceholders } from '@plugin/types/theme.js';
import {
  DeclarationReflection,
  i18n,
  Reflection,
  ReflectionKind,
} from 'typedoc';

export function pageTitle(this: MarkdownThemeContext): string {
  const textContentMappings = this.options.getValue('textContentMappings');
  const pageTitleTemplates = this.options.getValue('pageTitleTemplates');

  const hasCustomPageTitle = this.options.isSet('pageTitleTemplates');
  const indexPageTitle = hasCustomPageTitle
    ? pageTitleTemplates?.['index']
    : textContentMappings?.['title.indexPage'];
  const modulePageTitle = hasCustomPageTitle
    ? pageTitleTemplates?.['module']
    : textContentMappings?.['title.modulePage'];
  const memberPageTitle = hasCustomPageTitle
    ? pageTitleTemplates?.['member']
    : textContentMappings?.['title.memberPage'];

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

  const typeParameters = getTypeParameters(page.model as DeclarationReflection);
  const modelName = `${page.model.name}${this.helpers.hasSignatures(page.model as DeclarationReflection) ? '()' : ''}`;
  const rawName = `${modelName}${typeParameters?.length ? `<${typeParameters}>` : ''}`;
  const name = `${escapeChars(modelName)}${typeParameters?.length ? `${this.helpers.getAngleBracket('<')}${typeParameters}${this.helpers.getAngleBracket('>')}` : ''}`;
  const kind = ReflectionKind.singularString(page.model.kind);
  const keyword = getKeyword(page.model as DeclarationReflection);
  const codeKeyword = getCodeKeyword(page.model as DeclarationReflection);
  const group = getOwningGroupTitle(page.model);

  const shouldStrikethrough =
    page.model?.isDeprecated() &&
    this.options.getValue('strikeDeprecatedPageTitles');

  if (
    [ReflectionKind.Module, ReflectionKind.Namespace].includes(page.model.kind)
  ) {
    let renderedModuleTitle: string;

    if (typeof modulePageTitle === 'string') {
      renderedModuleTitle = getFromString(modulePageTitle, {
        rawName,
        name,
        kind,
      });
    } else {
      renderedModuleTitle = modulePageTitle({
        name,
        kind,
        rawName,
      } as PageTitleTemplatePlaceholders);
    }

    return shouldStrikethrough
      ? strikeThrough(renderedModuleTitle)
      : renderedModuleTitle;
  }

  let rendererMemberPageTitle: string;

  if (typeof memberPageTitle === 'string') {
    rendererMemberPageTitle = getFromString(memberPageTitle, {
      rawName,
      name,
      group,
      kind,
      keyword,
      codeKeyword,
    });
  } else {
    rendererMemberPageTitle = memberPageTitle({
      rawName,
      name,
      kind,
      keyword,
      codeKeyword,
      group,
    } as PageTitleTemplatePlaceholders);
  }

  return shouldStrikethrough
    ? strikeThrough(rendererMemberPageTitle)
    : rendererMemberPageTitle;
}

function getOwningGroupTitle(reflection: Reflection): string | undefined {
  const parent = reflection.parent as DeclarationReflection | undefined;
  if (!parent?.groups) return undefined;
  for (const group of parent.groups) {
    if (group.children.some((child) => child.name === reflection.name)) {
      return group.title;
    }
  }
  return undefined;
}

function getKeyword(model: DeclarationReflection) {
  if (model.flags.isAbstract) {
    return i18n.flag_abstract();
  }
  return undefined;
}

function getCodeKeyword(model: DeclarationReflection) {
  if (model.flags.isAbstract) {
    return 'abstract';
  }
  return undefined;
}

function getTypeParameters(model: DeclarationReflection) {
  return model?.typeParameters
    ?.map((typeParameter) => typeParameter.name)
    .join(', ');
}

function getFromString(
  textContent: string,
  config: PageTitleTemplatePlaceholders,
): string {
  return textContent
    .replace('{kind}', config.kind)
    .replace('{rawName}', config.rawName)
    .replace('{name}', config.name)
    .replace('{keyword}', config.keyword ?? '')
    .replace('{codeKeyword}', config.codeKeyword ?? '')
    .replace('{group}', config.group ?? '')
    .replace(/``/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
