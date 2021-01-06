import { ProjectReflection } from 'typedoc';

import MarkdownTheme from '../../theme';

export function toc(this: ProjectReflection) {
  return MarkdownTheme.HANDLEBARS.helpers.toc(this);
}
