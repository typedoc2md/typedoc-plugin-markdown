/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module core
 */
import * as path from 'path';
import {
  DeclarationOption,
  DeclarationReflection,
  ProjectReflection,
} from 'typedoc';
import {
  MarkdownApplication,
  MarkdownPageEvent,
} from 'typedoc-plugin-markdown';
import * as yaml from 'yaml';
import { declarations } from './options/index.js';
import { getResolvedTags } from './tags.js';

export function load(app: MarkdownApplication) {
  Object.entries(declarations).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
  });

  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    const entryFileName = app.options.getValue('entryFileName') as any;

    const frontmatterGlobals = app.options.getValue('frontmatterGlobals');
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
  });

  app.renderer.on(
    MarkdownPageEvent.END,
    (page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>) => {
      if (page.frontmatter && Object.keys(page.frontmatter)?.length) {
        const yamlStringifyOptions = app.options.getValue(
          'yamlStringifyOptions',
        );
        page.contents = page?.contents
          ?.replace(
            /^/,
            `---\n${yaml.stringify(page.frontmatter, { ...yamlStringifyOptions, lineWidth: 0 })}---\n\n`,
          )
          .replace(/[\r\n]{3,}/g, '\n\n');
      }
    },
  );
}

/**
 * Export anything that is available publicly
 */
export * from './public-api.js';
