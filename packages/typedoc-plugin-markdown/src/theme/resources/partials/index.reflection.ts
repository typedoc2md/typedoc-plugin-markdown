import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading, table } from '../markdown';
import { escapeChars, formatTableDescriptionCol } from '../utils';

export function reflectionIndex(
  context: MarkdownThemeRenderContext,
  reflection: ProjectReflection | DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  const subHeadingLevel = headingLevel;

  if (reflection.categories) {
    reflection.categories.forEach((categoryGroup) => {
      md.push(heading(subHeadingLevel, categoryGroup.title) + '\n');
      md.push(getGroup(context, categoryGroup) + '\n');
    });
  } else {
    const groups = reflection.groups?.filter((group) =>
      group.allChildrenHaveOwnDocument(),
    );
    groups?.forEach((reflectionGroup) => {
      if (reflectionGroup.categories) {
        md.push(heading(subHeadingLevel, reflectionGroup.title) + '\n');
        reflectionGroup.categories.forEach((categoryGroup) => {
          md.push(heading(subHeadingLevel + 1, categoryGroup.title) + '\n');
          md.push(getGroup(context, categoryGroup) + '\n');
        });
      } else {
        md.push(
          heading(
            subHeadingLevel,
            context.text.getTextFromKindString(reflectionGroup.title, true),
          ) + '\n',
        );
        md.push(getGroup(context, reflectionGroup) + '\n');
      }
    });
  }
  return md.join('\n');
}

function getGroup(
  context: MarkdownThemeRenderContext,
  group: ReflectionGroup | ReflectionCategory,
) {
  if (context.options.getValue('indexFormat') === 'table') {
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
    context.text.getText('label.description'),
  ];
  const rows: string[][] = [];

  group.children.forEach((child) => {
    const row: string[] = [];

    row.push(context.partials.linkTo(escapeChars(child.name), child.url));

    const comment = getComment(child);

    if (comment?.summary?.length) {
      row.push(
        formatTableDescriptionCol(
          context.partials.commentParts(comment.summary),
        ).split('\n')[0],
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
          ? `${
              child.signatures
                ? child.signatures[0].name
                : context.text.getText('kind.constructor.singular')
            }`
          : child.name;
      return `- ${context.partials.linkTo(escapeChars(name), child.url)}`;
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
