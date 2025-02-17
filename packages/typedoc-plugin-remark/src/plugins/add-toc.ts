import { Heading } from 'mdast';
import { DeclarationReflection, ReflectionKind, Router } from 'typedoc';
import { MarkdownApplication } from 'typedoc-plugin-markdown';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';

/**
 * This plugin internally adds a TOC heading to document as required by remark-toc.
 */
export default function (options: {
  reflection: DeclarationReflection;
  app: MarkdownApplication;
  remarkTocOptions: { heading: string };
}) {
  const { reflection, remarkTocOptions } = options;

  return (tree: Node) => {
    if (!shouldAddToc(reflection, options.app.renderer.router as Router)) {
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
 * Determine if the current should have a TOC.
 */
function shouldAddToc(reflection: DeclarationReflection, router: Router) {
  if (
    reflection.children?.every((child) => {
      router.hasOwnDocument(child);
    })
  ) {
    return false;
  }
  if (
    reflection.groups?.every((group) =>
      group.children.every((child) => router.hasOwnDocument(child)),
    )
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
    ReflectionKind.TypeAlias,
  ].includes(reflection.kind);
}
