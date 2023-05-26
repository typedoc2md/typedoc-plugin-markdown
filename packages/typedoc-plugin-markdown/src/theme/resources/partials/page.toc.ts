import * as path from 'path';
import {
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading, link, table } from '../../../support/elements';
import { escapeChars, tableComments } from '../../../support/utils';

/**
 * @category Partials
 */
export function pageTOC(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection | ProjectReflection>,
  headingLevel: number,
): string {
  const md: string[] = [];
  if (!page.model.groups) {
    md.push(heading(headingLevel, 'Packages'));
    const packagesList = page.model.children?.map((projectPackage) => {
      return `- [${escapeChars(projectPackage.name)}](${context.relativeURL(
        Boolean(projectPackage.readme)
          ? `${path.dirname(projectPackage.url || '')}/${context.getOption(
              'entryFileName',
            )}`
          : projectPackage.url,
      )})`;
    });
    md.push(packagesList?.join('\n') || '');
    return md.join('\n\n');
  }
  if (page.model.groups && context.getOption('entryPoints').length === 1) {
    md.push(context.memberTOC(page.model, headingLevel));
    return md.join('\n\n');
  }
  md.push(heading(headingLevel, 'Modules'));
  md.push(getGroup(context, page.model.groups[0]));
  return md.join('\n\n');
}

function getGroup(context: MarkdownThemeRenderContext, group: ReflectionGroup) {
  if (context.getOption('tocFormat') === 'table') {
    return getTable(context, group);
  }
  return getList(context, group);
}

function getTable(context: MarkdownThemeRenderContext, group: ReflectionGroup) {
  const reflectionKind = group.children[0].kind;
  const headers = [
    ReflectionKind.singularString(reflectionKind),
    'Description',
  ];
  const rows: string[][] = [];
  group.children.forEach((child) => {
    const row: string[] = [];
    row.push(link(escapeChars(child.name), context.relativeURL(child.url)));
    if (child.comment?.summary) {
      row.push(
        tableComments(context.commentParts(child.comment.summary)).split(
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

function getList(context: MarkdownThemeRenderContext, group: ReflectionGroup) {
  const list: string[] = [];
  group.children.forEach((child) =>
    list.push(
      `- [${escapeChars(child.name)}](${context.relativeURL(child.url)})`,
    ),
  );
  return list.join('\n');
}
