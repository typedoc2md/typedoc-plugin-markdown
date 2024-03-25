/**
 * Docs for `lib` module
 * @packageDocumentation
 */

import * as path from 'path';
import {
  Application,
  DeclarationOption,
  DeclarationReflection,
  ProjectReflection,
} from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
import * as yaml from 'yaml';
import * as options from './options/declarations';
import { getFrontmatterTags } from './tags';

export function load(app: Application) {
  Object.entries(options).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
  });

  app.renderer.on(
    MarkdownPageEvent.BEGIN,
    (page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>) => {
      const entryFileName = app.options.getValue('entryFileName') as any;

      const frontmatterGlobals = app.options.getValue(
        'frontmatterGlobals',
      ) as any;

      const frontmatterTags = app.options.getValue('frontmatterCommentTags');

      const namingConvention = app.options.getValue(
        'frontmatterNamingConvention',
      );

      const preserveFrontmatterCommentTags = app.options.getValue(
        'preserveFrontmatterCommentTags',
      );

      const readmeFrontmatter = app.options.getValue('readmeFrontmatter');

      const indexFrontmatter = app.options.getValue('indexFrontmatter');

      const resolvedFrontmatterTags = page.model?.comment
        ? getFrontmatterTags(
            page.model?.comment,
            frontmatterTags,
            namingConvention,
          )
        : {};

      if (
        Object.keys(resolvedFrontmatterTags)?.length &&
        !preserveFrontmatterCommentTags
      ) {
        Object.keys(resolvedFrontmatterTags).forEach((tag) => {
          page.model?.comment?.removeTags(`@${tag}`);
        });
      }

      page.frontmatter = {
        ...(page.frontmatter || {}),
        ...frontmatterGlobals,
        ...resolvedFrontmatterTags,
      };

      if (path.parse(page.url).name === path.parse(entryFileName).name) {
        page.frontmatter = {
          ...page.frontmatter,
          ...readmeFrontmatter,
        };
      }

      if (
        path.parse(page.url).name === path.parse(page.project?.url || '').name
      ) {
        page.frontmatter = {
          ...page.frontmatter,
          ...indexFrontmatter,
        };
      }
    },
  );

  app.renderer.on(
    MarkdownPageEvent.END,
    (page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>) => {
      if (page.frontmatter && Object.keys(page.frontmatter)?.length) {
        page.contents = page?.contents
          ?.replace(/^/, `---\n${yaml.stringify(page.frontmatter)}---\n\n`)
          .replace(/[\r\n]{3,}/g, '\n\n');
      }
    },
  );
}
