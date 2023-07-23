import {
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { getProjectDisplayName } from '../../helpers';

/**
 * @category Partials
 */
export function pageTitle(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection | ProjectReflection>,
): string {
  const md: string[] = [];

  const titleTemplate = context.options.getValue('titleTemplate') as string;

  if (page.model?.url === page.project.url) {
    md.push(
      (context.options.getValue('indexPageTitle') as string) ||
        getProjectDisplayName(
          page.project,
          context.options.getValue('includeVersion'),
        ),
    );
  } else {
    const title = context.memberTitle(
      page.model as DeclarationReflection,
      true,
    );

    md.push(
      titleTemplate
        .replace('{title}', title)
        .replace('{kind}', ReflectionKind.singularString(page.model.kind)),
    );
  }
  return md.join(' ');
}
