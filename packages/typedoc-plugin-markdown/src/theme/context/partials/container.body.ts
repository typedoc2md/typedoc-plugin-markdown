import { heading, horizontalRule } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  isNoneSection,
  sortNoneSectionFirst,
} from '@plugin/theme/lib/index.js';
import {
  ContainerReflection,
  DeclarationReflection,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

export function body(
  this: MarkdownThemeContext,
  model: ContainerReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.categories?.length) {
    md.push(
      this.partials.categories(model.categories, {
        headingLevel: options.headingLevel,
      }),
    );
  } else {
    const containerKinds = [
      ReflectionKind.Project,
      ReflectionKind.Module,
      ReflectionKind.Namespace,
    ];
    if (
      (this.options.getValue('excludeGroups') ||
        this.options.getValue('hideGroupHeadings')) &&
      containerKinds.includes(model.kind)
    ) {
      if (model.categories?.length) {
        md.push(
          this.partials.categories(model.categories, {
            headingLevel: options.headingLevel,
          }),
        );
      } else {
        if (model.groups?.length) {
          model.groups.sort(sortNoneSectionFirst).forEach((group, i) => {
            if (
              group.children.every((child) => this.router.hasOwnDocument(child))
            ) {
              if (!isNoneSection(group)) {
                md.push(heading(options.headingLevel, group.title));
              }
              md.push(this.partials.groupIndex(group));
            } else {
              md.push(
                this.partials.members(
                  group.children.filter(child => child.isDeclaration()),
                  {
                    headingLevel: options.headingLevel,
                  },
                ),
              );
              if (model.groups && i < model.groups?.length - 1) {
                md.push(horizontalRule());
              }
            }
          });
        }
      }
    } else {
      if (model.groups?.length) {
        md.push(
          this.partials.groups(model, {
            headingLevel: options.headingLevel,
            kind: model.kind,
          }),
        );
      } else if (
        model.children?.every((child) => this.router.hasOwnDocument(child))
      ) {
        md.push(
          this.partials.groupIndex({
            children: model.children,
          } as ReflectionGroup),
        );
      } else if (model.children) {
        md.push(
          this.partials.members(model.children, {
            headingLevel: options.headingLevel,
          }),
        );
      }
    }
  }
  return md.join('\n\n');
}
