import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';

export function reflectionIndex(
  this: MarkdownThemeContext,
  model: ProjectReflection | DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.categories) {
    model.categories.forEach((categoryGroup) => {
      md.push(heading(options.headingLevel, categoryGroup.title) + '\n');
      if (categoryGroup.description) {
        md.push(this.helpers.getCommentParts(categoryGroup.description) + '\n');
      }
      md.push(this.partials.groupIndex(categoryGroup) + '\n');
    });
  } else {
    const groups = model.groups?.filter(
      (group) =>
        group.title === this.i18n.kind_plural_module() ||
        group.allChildrenHaveOwnDocument(),
    );
    groups?.forEach((reflectionGroup) => {
      if (reflectionGroup.categories) {
        md.push(heading(options.headingLevel, reflectionGroup.title) + '\n');
        if (reflectionGroup.description) {
          md.push(
            this.helpers.getCommentParts(reflectionGroup.description) + '\n',
          );
        }
        reflectionGroup.categories.forEach((categoryGroup) => {
          md.push(
            heading(options.headingLevel + 1, categoryGroup.title) + '\n',
          );
          if (categoryGroup.description) {
            md.push(
              this.helpers.getCommentParts(categoryGroup.description) + '\n',
            );
          }
          md.push(this.partials.groupIndex(categoryGroup) + '\n');
        });
      } else {
        const isPackages =
          this.getPackagesCount() > 1 &&
          model.kind === ReflectionKind.Project &&
          reflectionGroup.title === this.i18n.kind_plural_module();
        if (isPackages) {
          md.push(
            heading(options.headingLevel, this.i18n.theme_packages()) + '\n',
          );
        } else {
          md.push(heading(options.headingLevel, reflectionGroup.title) + '\n');
        }
        if (reflectionGroup.description) {
          md.push(
            this.helpers.getCommentParts(reflectionGroup.description) + '\n',
          );
        }
        if (isPackages) {
          md.push(this.partials.packagesIndex(model as ProjectReflection));
        } else {
          md.push(this.partials.groupIndex(reflectionGroup) + '\n');
        }
      }
    });
  }
  return md.join('\n');
}
