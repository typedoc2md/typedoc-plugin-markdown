import * as path from 'path';
import {
  Application,
  DeclarationOption,
  DeclarationReflection,
  ProjectReflection,
} from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
import * as yaml from 'yaml';
import * as options from '../options/declarations';
import { getResolvedTags } from './tags';

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

      const readmeFrontmatter = app.options.getValue('readmeFrontmatter');
      const indexFrontmatter = app.options.getValue('indexFrontmatter');
      const resolvedFrontmatterTags = getResolvedTags(app, page.model?.comment);

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
