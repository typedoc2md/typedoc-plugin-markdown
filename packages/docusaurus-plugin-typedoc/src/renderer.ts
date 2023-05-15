import {
  Application,
  DeclarationReflection,
  PageEvent,
  ReflectionKind,
} from 'typedoc';
import { FrontmatterEvent } from 'typedoc-plugin-frontmatter';
import { MarkdownTheme } from 'typedoc-plugin-markdown';
import { SidebarOptions } from './models';

export function loadRenderer(app: Application) {
  app.renderer.on(PageEvent.END, (page: PageEvent<DeclarationReflection>) => {
    if (page.contents) {
      page.contents = page.contents.replace(/\\</g, '<');
    }
  });

  app.renderer.on(
    FrontmatterEvent.PREPARE_FRONTMATTER,
    (event: FrontmatterEvent) => {
      loadFrontmatter(app, event);
    },
  );
}

function loadFrontmatter(app: Application, event: FrontmatterEvent) {
  const renderContext = (
    app.renderer.theme as MarkdownTheme
  ).getRenderContext();

  const sidebar = app.options.getValue('sidebar') as SidebarOptions;
  const isIndexPage = event.page?.url.endsWith(renderContext.indexFileName);
  const isReadmePage = event.page?.url.endsWith(
    app.options.getValue('entryFileName') as string,
  );
  const isPackageModule =
    event.page.model.kindOf(ReflectionKind.Module) &&
    !Boolean((event.page.model?.parent as any).groups);
  const model = event.page?.model;

  let pluginFrontmatter: Record<string, any> = {};

  if (sidebar.autoConfiguration) {
    // Add sidebar labels to all pages
    if (!isIndexPage && !isReadmePage) {
      const sidebarLabel = model?.name;
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: sidebarLabel,
      };
    }
    // Entry url
    if (event.page?.url === app.options.getValue('entryFileName')) {
      if (sidebar.categoryLabel) {
        pluginFrontmatter = {
          ...pluginFrontmatter,
          sidebar_label: sidebar.categoryLabel,
        };
      }

      if (sidebar.position !== null && !Number.isNaN(sidebar.position)) {
        pluginFrontmatter = {
          ...pluginFrontmatter,
          sidebar_position: sidebar.position,
        };
      }
    }

    if (
      event.page?.url.endsWith(app.options.getValue('entryFileName') as string)
    ) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        hide_table_of_contents: true,
      };
    }

    if (isPackageModule && isReadmePage) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: event.page.model.name,
      };
    }

    if (isPackageModule && isIndexPage && Boolean(event.page.model?.readme)) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: 'Index',
      };
    }
  }

  event.frontmatter = {
    ...pluginFrontmatter,
    ...event.frontmatter,
  };
}
