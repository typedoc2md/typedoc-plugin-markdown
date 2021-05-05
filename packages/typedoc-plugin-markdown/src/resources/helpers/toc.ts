import { DeclarationReflection, ProjectReflection } from 'typedoc';

import MarkdownTheme from '../../theme';

export function toc(this: ProjectReflection | DeclarationReflection) {
  return MarkdownTheme.HANDLEBARS.helpers.toc(this);
}
