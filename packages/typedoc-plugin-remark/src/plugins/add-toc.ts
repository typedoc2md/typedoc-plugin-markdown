import { Heading } from 'mdast';
import { DeclarationReflection, Options, ReflectionKind } from 'typedoc';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';

/**
 * This plugin is used internally to add a toc heading as required to be present in the page when using the remark-toc plugin.
 */
export default function (options: any) {
  const { reflection, typedocOptions, tocOptions } = options;

  return (tree: Node) => {
    // If the current page is already an index page, do nothing.
    if (isIndexPage(reflection, typedocOptions)) {
      return tree;
    }
    visit(
      tree,
      'heading',
      (node: Heading, index, parent: { children: Node[] }) => {
        if (node.depth === 2) {
          const newHeading: Heading = {
            type: 'heading',
            depth: 2,
            children: [
              {
                type: 'text',
                value: tocOptions?.heading || 'Contents',
              },
            ],
          };
          parent?.children.splice(index, 0, newHeading);
          return false;
        }
      },
    );
  };
}

/**
 * Determine if the current page is already an index page.
 * - Reflection is a project and all children are modules.
 * - Reflection is a module and outputFileStrategy is equal to "members".
 */
function isIndexPage(
  reflection: DeclarationReflection,
  typedocOptions: Options,
) {
  if (
    reflection.kind === ReflectionKind.Project &&
    reflection.children?.every((child) => child.kind === ReflectionKind.Module)
  ) {
    return true;
  }
  if (
    [ReflectionKind.Project, ReflectionKind.Module].includes(reflection.kind) &&
    typedocOptions?.getValue('outputFileStrategy') === 'members'
  ) {
    return true;
  }
  return false;
}
