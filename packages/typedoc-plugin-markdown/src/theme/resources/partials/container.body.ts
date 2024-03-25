import { MarkdownThemeRenderContext } from '@theme/render-context';
import { ContainerReflection, ReflectionKind } from 'typedoc';

/**
 * @category Container Partials
 */
export function body(
  context: MarkdownThemeRenderContext,
  container: ContainerReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (container.categories?.length) {
    md.push(context.partials.categories(container.categories, headingLevel));
  } else {
    const containerKinds = [
      ReflectionKind.Project,
      ReflectionKind.Module,
      ReflectionKind.Namespace,
    ];
    if (
      context.options.getValue('excludeGroups') &&
      containerKinds.includes(container.kind)
    ) {
      if (container.categories?.length) {
        md.push(
          context.partials.categories(container.categories, headingLevel),
        );
      } else {
        if (container.children) {
          md.push(context.partials.members(container.children, headingLevel));
        }
      }
    } else {
      if (container.groups) {
        md.push(context.partials.groups(container.groups, headingLevel));
      }
    }
  }

  return md.join('\n\n');
}
