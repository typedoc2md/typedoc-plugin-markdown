import { heading, link, table } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { PLURAL_KIND_KEY_MAP } from '@plugin/options/text-mappings';
import { MarkdownThemeContext } from '@plugin/theme';
import { TextContentMappings } from 'public-api';
import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

/**
 * Renders the index section of a reflection.
 *
 * @category Member Partials
 */
export function reflectionIndex(
  this: MarkdownThemeContext,
  model: ProjectReflection | DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  const getGroup = (group: ReflectionGroup | ReflectionCategory) => {
    if (this.options.getValue('indexFormat') === 'table') {
      return getTable(this, group.children);
    }
    return getList(this, group.children);
  };

  const subHeadingLevel = options.headingLevel;

  if (model.categories) {
    model.categories.forEach((categoryGroup) => {
      md.push(heading(subHeadingLevel, categoryGroup.title) + '\n');
      if (categoryGroup.description) {
        md.push(this.partials.commentParts(categoryGroup.description) + '\n');
      }
      md.push(getGroup(categoryGroup) + '\n');
    });
  } else {
    const groups = model.groups?.filter((group) =>
      group.allChildrenHaveOwnDocument(),
    );

    if (this.options.getValue('excludeGroups')) {
      const children = groups?.reduce((acc, group) => {
        return [...acc, ...group.children];
      }, []);
      if (this.options.getValue('indexFormat') === 'table') {
        md.push(getTable(this, children || []));
      } else {
        md.push(getList(this, children || []));
      }
    } else {
      groups?.forEach((reflectionGroup) => {
        if (reflectionGroup.categories) {
          md.push(heading(subHeadingLevel, reflectionGroup.title) + '\n');
          reflectionGroup.categories.forEach((categoryGroup) => {
            md.push(heading(subHeadingLevel + 1, categoryGroup.title) + '\n');
            if (categoryGroup.description) {
              md.push(
                this.partials.commentParts(categoryGroup.description) + '\n',
              );
            }
            md.push(getGroup(categoryGroup) + '\n');
          });
        } else {
          const kindKey = PLURAL_KIND_KEY_MAP[
            reflectionGroup.title
          ] as keyof TextContentMappings;
          md.push(
            heading(
              subHeadingLevel,
              this.getText(kindKey) || reflectionGroup.title,
            ) + '\n',
          );
          md.push(getGroup(reflectionGroup) + '\n');
        }
      });
    }
  }
  return md.join('\n');
}

function getTable(
  context: MarkdownThemeContext,
  children: DeclarationReflection[],
) {
  const tableColumnsOptions = context.options.getValue('tableColumns');

  const headers = [
    context.options.getValue('excludeGroups')
      ? context.getText('label.member')
      : ReflectionKind.singularString(children[0].kind),
    context.getText('label.description'),
  ];

  const rows: string[][] = [];

  children.forEach((child) => {
    const row: string[] = [];

    if (child.url) {
      row.push(
        link(escapeChars(child.name), context.getRelativeUrl(child.url)),
      );
    }

    const comment = context.helpers.getDeclarationComment(child);

    if (comment?.summary?.length) {
      row.push(
        context.partials
          .commentParts(comment.summary)
          ?.split('\n\n')[0]
          .replace(/\n/g, ' '),
      );
    } else {
      row.push('-');
    }
    rows.push(row);
  });
  return table(headers, rows, tableColumnsOptions.leftAlignHeadings);
}

function getList(
  context: MarkdownThemeContext,
  children: DeclarationReflection[],
) {
  const filteredChildren = children
    .filter((child) => Boolean(child.url))
    .map((child) => {
      const name =
        child.name === 'constructor'
          ? `${
              child.signatures
                ? child.signatures[0].name
                : context.getText('kind.constructor.singular')
            }`
          : child.name;
      return child.url
        ? `- ${link(escapeChars(name), context.getRelativeUrl(child.url))}`
        : '';
    });
  return filteredChildren.join('\n');
}
