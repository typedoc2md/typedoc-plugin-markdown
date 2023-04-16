import {
  Comment,
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
} from 'typedoc';
import { FrontmatterGlobals, FrontmatterNamingConvention } from '../models';
import { getReflectionTitle, getTagName } from '../support/helpers';
import { stripLineBreaks, unEscapeChars } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function frontmatter(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const globals = context.getOption('frontmatterGlobals');
  const yaml = `---\n${Object.entries({
    ...getBaseFrontmatterVars(page, context),
    ...(page.model.comment && getFrontmatterTags(page.model.comment, context)),
    ...(globals && getGlobals(globals)),
  })
    .map(
      ([key, value]) =>
        `${key}: ${typeof value === 'string' ? `"${value}"` : value}`,
    )
    .join('\n')}\n---`;
  return yaml;
}

function getBaseFrontmatterVars(
  page: PageEvent<ProjectReflection | DeclarationReflection>,
  context: MarkdownThemeRenderContext,
) {
  return {
    [toVariable('title', context.getOption('frontmatterNamingConvention'))]:
      unEscapeChars(
        getReflectionTitle(page.model as DeclarationReflection, true),
      ),
  };
}

function getGlobals(globals: FrontmatterGlobals) {
  if (typeof globals === 'string') {
    return JSON.parse(globals);
  }
  return globals;
}

function getFrontmatterTags(
  comment: Comment,
  context: MarkdownThemeRenderContext,
) {
  if (!comment) {
    return {};
  }

  if (comment.blockTags?.length) {
    const tags = comment.blockTags
      .filter((tag) =>
        context.getOption('frontmatterTags')?.includes(getTagName(tag)),
      )
      .reduce((prev, current) => {
        const tagName = getTagName(current);
        const tagValue = current.content
          .filter((commentPart) => commentPart.kind === 'text')
          .map((commentPart) => stripLineBreaks(commentPart.text, false))
          .join('');
        return {
          ...prev,
          [toVariable(
            tagName,
            context.getOption('frontmatterNamingConvention'),
          )]: toValue(tagValue),
        };
      }, {});
    return tags;
  }
  return {};
}

function toValue(tagValue: string) {
  return Number(tagValue) || tagValue;
}

function toVariable(
  str: string,
  namingConvention: FrontmatterNamingConvention,
) {
  if (namingConvention === 'snakeCase') {
    return toSnakeCase(str);
  }
  if (namingConvention === 'kebabCase') {
    return toKebabCase(str);
  }
  if (namingConvention === 'pascalCase') {
    return toPascalCase(str);
  }
  return str;
}

function toSnakeCase(str: string) {
  return (
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      ?.map((s) => s.toLowerCase())
      .join('_') || ''
  );
}

function toPascalCase(str: string) {
  return (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join('');
}

function toKebabCase(str: string) {
  return (
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      ?.join('-')
      .toLowerCase() || ''
  );
}
