import { horizontalRule } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection } from 'typedoc';

export function members(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
  options: { headingLevel: number },
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
      }),
    );
    if (index < items.length - 1 && displayHr(item)) {
      md.push(horizontalRule());
    }
  });
  return md.join('\n\n');
}
