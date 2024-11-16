import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection } from 'typedoc';

export function typeDeclarationSource(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
): string {
  const md: string[] = [];

  const valueDeclaration = this.helpers.getCompilerSource(model);

  if (valueDeclaration) {
    md.push(`\n\n\`\`\`ts\n${valueDeclaration}\n\`\`\`\n\n`);
  }

  return md.join('\n\n');
}
