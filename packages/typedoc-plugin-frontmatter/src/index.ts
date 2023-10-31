import {
  Application,
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
} from 'typedoc';
import * as yaml from 'yaml';
import { FrontmatterEvent } from './events';
import { declareOptions } from './options';
import { getFrontmatterTags } from './tags';

export function load(app: Application) {
  declareOptions(app);

  app.renderer.on(
    PageEvent.END,
    (page: PageEvent<ProjectReflection | DeclarationReflection>) => {
      const frontmatterGlobals = app.options.getValue(
        'frontmatterGlobals',
      ) as any;

      const frontmatterTags = app.options.getValue(
        'frontmatterTags',
      ) as string[];

      const frontmatterTagsToSnakeCase = app.options.getValue(
        'frontmatterTagsToSnakeCase',
      ) as boolean;

      const event = new FrontmatterEvent(
        FrontmatterEvent.PREPARE_FRONTMATTER,
        page,
        {
          ...frontmatterGlobals,
          ...(page.model?.comment &&
            getFrontmatterTags(
              page.model.comment,
              frontmatterTags,
              frontmatterTagsToSnakeCase,
            )),
        },
      );

      app.renderer.trigger(event);

      if (Object.keys(event.frontmatter).length) {
        page.contents = page?.contents
          ?.replace(/^/, `---\n${yaml.stringify(event.frontmatter)}---\n\n`)
          .replace(/[\r\n]{3,}/g, '\n\n');
      }
    },
  );
}

export * from './events';
