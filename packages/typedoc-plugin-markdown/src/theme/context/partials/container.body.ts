import { heading } from '@plugin/libs/markdown';
import { OutputFileStrategy } from '@plugin/options/maps';
import { MarkdownThemeContext } from 'theme';
import {
  ContainerReflection,
  DocumentReflection,
  ReflectionKind,
} from 'typedoc';

export function body(
  this: MarkdownThemeContext,
  model: ContainerReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.categories?.length) {
    if (
      this.options.getValue('outputFileStrategy') ===
      OutputFileStrategy.Categories
    ) {
      md.push(
        heading(options.headingLevel, this.i18n.theme_categories()) + '\n',
      );
      md.push(this.partials.categoryIndex(model.categories));
    } else {
      md.push(
        this.partials.categories(model.categories, {
          headingLevel: options.headingLevel,
        }),
      );
    }
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
        if (model.children) {
          md.push(
            this.partials.members(model.children, {
              headingLevel: options.headingLevel,
            }),
          );
        }
      }
    } else {
      const groups = model.groups?.filter(
        (group) => !(group.owningReflection instanceof DocumentReflection),
      );

      if (groups?.length) {
        if (
          containerKinds.includes(model.kind) &&
          this.options.getValue('outputFileStrategy') ===
            OutputFileStrategy.Groups
        ) {
          md.push(heading(options.headingLevel, 'Groups') + '\n');
          md.push(this.partials.categoryIndex(groups));
        } else {
          md.push(
            this.partials.groups(groups, {
              headingLevel: options.headingLevel,
              kind: model.kind,
            }),
          );
        }
      }
    }
  }

  return md.join('\n\n');
}
