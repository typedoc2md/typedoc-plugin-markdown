import { Application } from 'typedoc';
import { FrontmatterEvent } from 'typedoc-plugin-frontmatter';
import { SidebarOptions } from './models';

export function loadRenderer(app: Application) {
  app.renderer.on(
    FrontmatterEvent.PREPARE_FRONTMATTER,
    (event: FrontmatterEvent) => {
      loadFrontmatter(app, event);
    },
  );
}

function loadFrontmatter(app: Application, event: FrontmatterEvent) {
  const hasReadme = !app.options.getValue('readme').endsWith('none');
  const entryPage = app.options.getValue('entryFileName');
  const indexPage = app.options.getValue('indexFileName');
  const sidebar = app.options.getValue('sidebar') as SidebarOptions;
  const model = event.page?.model;
  const sidebarLabel = model?.name;
  let pluginFrontmatter: Record<string, any> = {};

  if (sidebar.autoConfiguration) {
    if (event.page?.url === app.options.getValue('entryFileName')) {
      if (sidebar.categoryLabel) {
        pluginFrontmatter = {
          ...pluginFrontmatter,
          sidebar_label: sidebar.categoryLabel,
        };
      }
    }

    if (hasReadme) {
      if (event.page?.url === entryPage) {
        pluginFrontmatter = {
          ...pluginFrontmatter,
          ...(sidebar.readmeLabel && { sidebar_label: sidebar.readmeLabel }),
          sidebar_position: 0,
        };
      }
      if (event.page?.url === `01-${indexPage}`) {
        pluginFrontmatter = {
          ...pluginFrontmatter,
          ...(sidebar.indexLabel && { sidebar_label: sidebar.indexLabel }),
        };
      }
    }

    // Add sidebar labels to all pages
    if (
      !(event.page?.url === entryPage) &&
      !(event.page?.url === `01-${indexPage}`)
    ) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: sidebarLabel,
      };
    }
  }

  event.frontmatter = {
    ...pluginFrontmatter,
    ...event.frontmatter,
  };
}
