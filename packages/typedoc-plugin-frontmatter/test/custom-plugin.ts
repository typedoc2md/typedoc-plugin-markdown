import { Application } from 'typedoc';
import { FrontmatterEvent } from '../dist';

export function load(app: Application) {
  app.renderer.on(
    FrontmatterEvent.PREPARE_FRONTMATTER,
    (event: FrontmatterEvent) => {
      event.frontmatter = {
        title: event.page.model?.name,
        ...event.frontmatter,
      };
    },
  );
}
