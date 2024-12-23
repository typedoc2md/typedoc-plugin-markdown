import { Heading } from 'mdast';
import { DeclarationReflection, Options, ReflectionKind } from 'typedoc';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';

/**
 * This plugin internally adds a TOC heading to document as required by remark-toc.
 */
export default function (options: {
  reflection: DeclarationReflection;
  typedocOptions: Options;
  remarkTocOptions: { heading: string };
}) {
  const { reflection, typedocOptions, remarkTocOptions } = options;

  return (tree: Node) => {
    if (!shouldAddToc(reflection, typedocOptions)) {
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
                value: remarkTocOptions?.heading || 'Contents',
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
 *
 * Returns false if
 *
 * - The reflection is a module or project and outputFileStrategy is equal to "members".
 * - The reflection is a project and all children are modules.
 * - The reflection kind is not in the list of allowed kinds.
 * -
 */
function shouldAddToc(
  reflection: DeclarationReflection,
  typedocOptions: Options,
) {
  if (
    [ReflectionKind.Project, ReflectionKind.Module].includes(reflection.kind) &&
    typedocOptions?.getValue('outputFileStrategy') === 'members'
  ) {
    return false;
  }
  if (
    reflection.kind === ReflectionKind.Project &&
    reflection.children?.every((child) => child.kind === ReflectionKind.Module)
  ) {
    return false;
  }
  return [
    ReflectionKind.Project,
    ReflectionKind.Module,
    ReflectionKind.Namespace,
    ReflectionKind.Class,
    ReflectionKind.Enum,
    ReflectionKind.Interface,
    ReflectionKind.Document,
  ].includes(reflection.kind);
}
