import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  ContainerReflection,
  DeclarationReflection,
  DocumentReflection,
  ProjectReflection,
} from 'typedoc';

export function documents(
  this: MarkdownThemeContext,
  model: ProjectReflection | DeclarationReflection | ContainerReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];
  const docGroups = model.groups?.filter(
    (group) => group.owningReflection instanceof DocumentReflection,
  );
  if (docGroups?.length) {
    docGroups.forEach((reflectionGroup) => {
      md.push(heading(options.headingLevel, reflectionGroup.title));
      docGroups.forEach((reflectionGroup) => {
        md.push(this.helpers.getGroupIndex(reflectionGroup));
      });
    });
  }
  return md.join('\n\n');
}
