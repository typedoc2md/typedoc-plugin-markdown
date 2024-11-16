import { horizontalRule } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection } from 'typedoc';

export function members(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
  options: { headingLevel: number; groupTitle?: string },
): string {
  const md: string[] = [];
  const displayHr = (reflection: DeclarationReflection) => {
    if (this.options.getValue('outputFileStrategy') === 'modules') {
      return this.helpers.isGroupKind(reflection);
    }
    return true;
  };
  const items = model?.filter((item) => !item.hasOwnDocument);
  items?.forEach((item, index) => {
    md.push(
      this.partials.memberContainer(item, {
        headingLevel: options.headingLevel,
        groupTitle: options.groupTitle,
      }),
    );
    if (index < items.length - 1 && displayHr(item)) {
      md.push(horizontalRule());
    }
  });
  return md.join('\n\n');
}
