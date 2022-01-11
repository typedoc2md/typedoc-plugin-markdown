import * as Handlebars from 'handlebars';
import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionGroup,
} from 'typedoc';

import { escapeChars } from '../../utils';

import { MarkdownThemeContext } from '../../theme-context';

export default function (context: MarkdownThemeContext) {
  Handlebars.registerHelper(
    'toc',
    function (this: ProjectReflection | DeclarationReflection) {
      const md: string[] = [];

      const { hideInPageTOC } = context.options;

      const isVisible = this.groups?.some((group) =>
        group.allChildrenHaveOwnDocument(),
      );

      function pushGroup(group: ReflectionGroup, md: string[]) {
        const children = group.children.map(
          (child) => `- [${escapeChars(child.name)}](${context.urlTo(child)})`,
        );
        md.push(children.join('\n'));
      }

      if ((!hideInPageTOC && this.groups) || (isVisible && this.groups)) {
        if (!hideInPageTOC) {
          md.push(`## Table of contents\n\n`);
        }
        const headingLevel = hideInPageTOC ? `##` : `###`;
        this.groups?.forEach((group) => {
          const groupTitle = group.title;
          if (group.categories) {
            group.categories.forEach((category) => {
              md.push(`${headingLevel} ${category.title} ${groupTitle}\n\n`);
              pushGroup(category as any, md);
              md.push('\n');
            });
          } else {
            if (!hideInPageTOC || group.allChildrenHaveOwnDocument()) {
              md.push(`${headingLevel} ${groupTitle}\n\n`);
              pushGroup(group, md);
              md.push('\n');
            }
          }
        });
      }
      return md.length > 0 ? md.join('\n') : null;
    },
  );
}
