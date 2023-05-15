import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionGroup,
} from 'typedoc';
import { heading } from '../../support/els';

import { escapeChars } from '../../support/utils';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function memberIndex(
  context: MarkdownThemeRenderContext,
  reflection: ProjectReflection | DeclarationReflection,
  headingLevel: number,
) {
  const md: string[] = [];

  const hideInPageTOC = context.getOption('hideInPageTOC');

  const isVisible = reflection.groups?.some((group) =>
    group.allChildrenHaveOwnDocument(),
  );

  if (
    (!hideInPageTOC && reflection.groups) ||
    (isVisible && reflection.groups)
  ) {
    const subHeadingLevel = headingLevel + 1;

    md.push(heading(headingLevel, 'Index\n'));

    if (reflection.categories?.length) {
      reflection.categories.forEach((item) => {
        md.push(heading(subHeadingLevel, item.title) + '\n');
        md.push(getGroup(context, item) + '\n');
      });
    } else {
      if (context.getOption('excludeGroups') && reflection.children) {
        md.push(
          reflection.children
            .map((child) => {
              return getTocItem(context, child);
            })
            .join('\n'),
        );
      } else {
        reflection.groups?.forEach((reflectionGroup) => {
          if (reflectionGroup.categories) {
            md.push(heading(subHeadingLevel, reflectionGroup.title) + '\n');
            reflectionGroup.categories.forEach((item2) => {
              md.push(heading(subHeadingLevel + 1, item2.title) + '\n');
              md.push(getGroup(context, reflectionGroup) + '\n');
            });
          } else {
            if (
              !hideInPageTOC ||
              reflectionGroup.allChildrenHaveOwnDocument()
            ) {
              md.push(heading(subHeadingLevel, reflectionGroup.title) + '\n');
              md.push(getGroup(context, reflectionGroup) + '\n');
            }
          }
        });
      }
    }
  }
  return md.length > 0 ? md.join('\n') : '';
}

function getGroup(context: MarkdownThemeRenderContext, group: ReflectionGroup) {
  const children = group.children.map((child) => getTocItem(context, child));
  return children.join('\n');
}

function getTocItem(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  return `- [${escapeChars(reflection.name)}](${context.relativeURL(
    reflection.url,
  )})`;
}
