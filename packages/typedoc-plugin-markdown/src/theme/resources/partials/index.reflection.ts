import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading, indentBlock, link, table } from '../../../support/elements';
import {
  escapeChars,
  formatTableDescriptionCol,
  slugify,
} from '../../../support/utils';

export function reflectionIndex(
  context: MarkdownThemeRenderContext,
  reflection: ProjectReflection | DeclarationReflection,
  inline = false,
  headingLevel: number,
): string {
  const md: string[] = [];

  const subHeadingLevel = headingLevel;

  if (reflection.categories) {
    reflection.categories.forEach((categoryGroup) => {
      md.push(heading(subHeadingLevel, categoryGroup.title) + '\n');
      md.push(getGroup(context, categoryGroup, inline) + '\n');
    });
  } else {
    const groups = reflection.groups?.filter((group) =>
      inline
        ? !group.allChildrenHaveOwnDocument()
        : group.allChildrenHaveOwnDocument(),
    );
    groups?.forEach((reflectionGroup) => {
      if (reflectionGroup.categories) {
        md.push(heading(subHeadingLevel, reflectionGroup.title) + '\n');
        reflectionGroup.categories.forEach((categoryGroup) => {
          md.push(heading(subHeadingLevel + 1, categoryGroup.title) + '\n');
          md.push(getGroup(context, categoryGroup, inline) + '\n');
        });
      } else {
        const hasChildren = reflectionGroup.children.some((child) =>
          Boolean(child.url),
        );
        if (inline) {
          md.push(
            `- [${reflectionGroup.title}](${context.relativeURL(
              context.page?.url,
            )}#${slugify(reflectionGroup.title).toLowerCase()})`,
          );
          if (hasChildren) {
            md.push(
              indentBlock(getGroup(context, reflectionGroup, inline) + '\n'),
            );
          }
        } else {
          md.push(heading(subHeadingLevel, reflectionGroup.title) + '\n');
          md.push(getGroup(context, reflectionGroup, inline) + '\n');
        }
      }
    });
  }
  return md.join('\n');
}

function getGroup(
  context: MarkdownThemeRenderContext,
  group: ReflectionGroup | ReflectionCategory,
  inline: boolean,
) {
  if (!inline && context.options.getValue('indexFormat') === 'table') {
    return getTable(context, group);
  }
  return getList(context, group);
}

function getTable(
  context: MarkdownThemeRenderContext,
  group: ReflectionGroup | ReflectionCategory,
) {
  const reflectionKind = group.children[0].kind;
  const headers = [
    ReflectionKind.singularString(reflectionKind),
    'Description',
  ];
  const rows: string[][] = [];

  group.children.forEach((child) => {
    const row: string[] = [];

    row.push(link(escapeChars(child.name), context.relativeURL(child.url)));

    const comment = getComment(child);

    if (comment?.summary?.length) {
      row.push(
        formatTableDescriptionCol(context.commentParts(comment.summary)).split(
          '\n',
        )[0],
      );
    } else {
      row.push('-');
    }
    rows.push(row);
  });
  return table(headers, rows);
}

function getList(
  context: MarkdownThemeRenderContext,
  group: ReflectionGroup | ReflectionCategory,
) {
  const children = group.children
    .filter((child) => Boolean(child.url))
    .map((child) => {
      const name =
        child.name === 'constructor'
          ? `${child.signatures ? child.signatures[0].name : 'constructor'}`
          : child.name;
      return `- [${escapeChars(name)}](${context.relativeURL(child.url)})`;
    });
  return children.join('\n');
}

function getComment(declaration: DeclarationReflection) {
  if (declaration.signatures?.length) {
    return declaration.signatures[0].comment;
  }

  if ((declaration.type as any)?.declaration?.signatures?.length) {
    return (declaration.type as any)?.declaration.signatures[0].comment;
  }

  return declaration.comment;
}
