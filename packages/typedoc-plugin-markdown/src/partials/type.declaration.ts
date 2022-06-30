import { DeclarationReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';
import { Collapse } from '../types';
import { escapeChars } from '../utils';

export function declarationType(
  context: MarkdownThemeRenderContext,
  declarationReflection: DeclarationReflection,
  collapse: Collapse = 'none',
) {
  if (collapse === 'object' || collapse === 'all') {
    return `\`Object\``;
  }

  if (declarationReflection.indexSignature || declarationReflection.children) {
    let indexSignature = '';
    const declarationIndexSignature = declarationReflection.indexSignature;
    if (declarationIndexSignature) {
      const key = declarationIndexSignature.parameters
        ? declarationIndexSignature.parameters.map(
            (param) => `\`[${param.name}: ${param.type}]\``,
          )
        : '';
      const obj = context.partials.someType(
        declarationIndexSignature.type as SomeType,
      );
      indexSignature = `${key}: ${obj}; `;
    }
    const types =
      declarationReflection.children &&
      declarationReflection.children.map((obj) => {
        return `\`${obj.name}${
          obj.flags.isOptional ? '?' : ''
        }\`: ${context.partials.someType(obj.type as SomeType)} ${
          obj.defaultValue && obj.defaultValue !== '...'
            ? `= ${escapeChars(obj.defaultValue)}`
            : ''
        }`;
      });
    return `{ ${indexSignature ? indexSignature : ''}${
      types ? types.join('; ') : ''
    } }${
      declarationReflection.defaultValue &&
      declarationReflection.defaultValue !== '...'
        ? `= ${escapeChars(declarationReflection.defaultValue)}`
        : ''
    }`;
  }
  return '{}';
}
