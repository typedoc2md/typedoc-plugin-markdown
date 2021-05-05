import { BindOption } from 'typedoc';
import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionGroup,
} from 'typedoc/dist/lib/models';
import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';

import { escape } from '../resources/helpers/escape';
import MarkdownTheme from '../theme';

@Component({ name: 'toc' })
export class TableOfContents extends ContextAwareRendererComponent {
  @BindOption('hideInPageTOC')
  hideInPageTOC!: boolean;

  initialize() {
    super.initialize();

    MarkdownTheme.HANDLEBARS.registerHelper(
      'toc',
      (reflection: ProjectReflection | DeclarationReflection) => {
        const md: string[] = [];
        const isVisible = reflection.groups?.some((group) =>
          group.allChildrenHaveOwnDocument(),
        );
        if (
          (!this.hideInPageTOC && reflection.groups) ||
          (isVisible && reflection.groups)
        ) {
          if (!this.hideInPageTOC) {
            md.push(`## Table of contents\n\n`);
          }
          const headingLevel = this.hideInPageTOC ? `##` : `###`;
          reflection.groups?.forEach((group) => {
            const groupTitle = group.title;
            if (group.categories) {
              group.categories.forEach((category) => {
                md.push(`${headingLevel} ${category.title} ${groupTitle}\n\n`);
                pushGroup(category as any, md);
                md.push('\n');
              });
            } else {
              if (!this.hideInPageTOC || group.allChildrenHaveOwnDocument()) {
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
}

function pushGroup(group: ReflectionGroup, md: string[]) {
  const children = group.children.map(
    (child) =>
      `- [${escape(child.name)}](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(
        child.url,
      )})`,
  );
  md.push(children.join('\n'));
}
