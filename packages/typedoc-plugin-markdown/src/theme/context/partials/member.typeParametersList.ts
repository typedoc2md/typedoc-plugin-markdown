import { backTicks, heading, italic } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { TypeParameterReflection } from 'typedoc';

export function typeParametersList(
  this: MarkdownThemeContext,
  model: TypeParameterReflection[],
  options: { headingLevel: number },
): string {
  const md: string[] = [];
  model?.forEach((typeParameter) => {
    const typeParamOut: string[] = [];

    const anchor = this.router.hasUrl(typeParameter)
      ? this.router.getAnchor(typeParameter)
      : undefined;

    if (anchor && this.options.getValue('useHTMLAnchors')) {
      typeParamOut.push(`<a id="${anchor}"></a>`);
    }

    let title = typeParameter.name;

    if (anchor && this.options.getValue('useCustomAnchors')) {
      const customAnchorsFormat = this.options.getValue('customAnchorsFormat');

      if (customAnchorsFormat === 'curlyBrace') {
        title = `${title} {#${anchor}}`;
      } else if (customAnchorsFormat === 'escapedCurlyBrace') {
        title = `${title} \\{#${anchor}\\}`;
      } else if (customAnchorsFormat === 'squareBracket') {
        title = `${title} [#${anchor}]`;
      } else {
        throw new Error(`Invalid custom anchors format`);
      }
    }

    typeParamOut.push(heading(options.headingLevel + 1, title));

    const nameDescription: string[] = [backTicks(typeParameter.name)];

    if (typeParameter.type) {
      nameDescription.push(
        `${italic('extends')} ${this.partials.someType(typeParameter.type)}`,
      );
    }

    if (typeParameter.default) {
      nameDescription.push(
        `= ${this.partials.someType(typeParameter.default, { forceCollapse: true })}`,
      );
    }

    typeParamOut.push(nameDescription.join(' '));

    if (typeParameter.comment) {
      typeParamOut.push(this.partials.comment(typeParameter.comment));
    }

    md.push(typeParamOut.join('\n\n'));
  });

  return md.join('\n\n');
}
