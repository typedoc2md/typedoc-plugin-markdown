import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, SignatureReflection } from 'typedoc';

export function inheritance(
  this: MarkdownThemeContext,
  model: DeclarationReflection | SignatureReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.implementationOf) {
    if (options.headingLevel !== -1) {
      md.push(
        heading(options.headingLevel, this.i18n.theme_implementation_of()),
      );
    }
    md.push(this.partials.typeAndParent(model.implementationOf));
  }

  if (model.inheritedFrom) {
    if (options.headingLevel !== -1) {
      md.push(heading(options.headingLevel, this.i18n.theme_inherited_from()));
    }
    md.push(this.partials.typeAndParent(model.inheritedFrom));
  }

  if (model.overwrites) {
    const overridesLabel = this.i18n.theme_overrides();
    if (options.headingLevel !== -1) {
      md.push(heading(options.headingLevel, overridesLabel));
    }
    md.push(this.partials.typeAndParent(model.overwrites));
  }

  return md.join('\n\n');
}
