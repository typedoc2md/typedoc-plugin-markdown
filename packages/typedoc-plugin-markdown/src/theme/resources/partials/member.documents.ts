import { heading } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import {
  ContainerReflection,
  DeclarationReflection,
  DocumentReflection,
  ProjectReflection,
} from 'typedoc';

/**
 * @category Member Partials
 */
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
      if (this.options.getValue('inlineDocuments')) {
        reflectionGroup.children.forEach((child) => {
          md.push(
            this.partials.commentParts((child as DocumentReflection).content),
          );
        });
      } else {
        docGroups.forEach((reflectionGroup) => {
          md.push(this.helpers.getGroupIndex(reflectionGroup));
        });
      }
    });
  }
  return md.join('\n\n');
}
