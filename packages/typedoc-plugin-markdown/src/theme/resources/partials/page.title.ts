import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';

/**
 * @category Partials
 */
export function pageTitle(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection | ProjectReflection>,
): string {
  const md: string[] = [];

  const titleTemplate = context.options.getValue('titleTemplate') as string;

  if (page.model?.url === page.project.url) {
    md.push(context.options.getValue('indexPageTitle') as string);
  } else {
    const name = context.memberTitle(page.model as DeclarationReflection, true);
    md.push(
      titleTemplate
        .replace('{name}', name)
        .replace('{kind}', ReflectionKind.singularString(page.model.kind)),
    );
  }
  return md.join(' ');
}
