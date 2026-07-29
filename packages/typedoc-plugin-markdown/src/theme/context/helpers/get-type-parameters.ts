import { backTicks, italic } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { TypeParameterReflection } from 'typedoc';

export function getTypeParameters(
  this: MarkdownThemeContext,
  typeParameters?: TypeParameterReflection[],
  options?: { includeBackticks?: boolean },
): string | undefined {
  if (!typeParameters?.length) return undefined;
  const includeBackticks = options?.includeBackticks ?? true;

  return typeParameters
    .map((typeParameter) => {
      const nameDescription = [
        includeBackticks ? backTicks(typeParameter.name) : typeParameter.name,
      ];

      if (this.options.getValue('expandParameters')) {
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
      }

      return nameDescription.join(' ');
    })
    .join(', ');
}
