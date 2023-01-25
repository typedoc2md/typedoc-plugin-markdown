import { DeclarationReflection, PageEvent } from 'typedoc';
import { heading } from '../support/els';
import { getReflectionTitle } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function pageTitle(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  md.push(heading(1, getReflectionTitle(page.model)));

  return md.join('\n\n');
}
