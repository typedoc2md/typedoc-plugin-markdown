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

  const hasReadme = !app.options.getValue('readme').endsWith('none');
  const sidebar = app.options.getValue('sidebar') as SidebarOptions;
  const isIndexPage = event.page?.url.endsWith(renderContext.indexFile);
  const isReadmePage = event.page?.url.endsWith(renderContext.readmeFile);
  const isPackageModule =
    event.page.model.kindOf(ReflectionKind.Module) &&
    !Boolean((event.page.model?.parent as any).groups);

  let pluginFrontmatter: Record<string, any> = {};

  // Add titles to all pages
  if (!isIndexPage && !isReadmePage) {
    pluginFrontmatter = {
      ...pluginFrontmatter,
      title: event.page?.model?.name,
    };
  }

  if (sidebar.autoConfiguration) {
    // Entry url
    if (
      event.page?.url === renderContext.readmeFile ||
      (!hasReadme && isIndexPage)
    ) {
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

    if (isIndexPage) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: sidebar.indexLabel,
      };
    }

    if (isIndexPage) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: sidebar.indexLabel,
      };
    }

    if (isIndexPage && !Boolean((event.page.model as any)?.groups)) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: 'Packages',
      };
    }

    if (isPackageModule && isReadmePage) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: event.page.model.name,
      };
    }

    if (isPackageModule && isIndexPage && !Boolean(event.page.model?.readme)) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: event.page.model.name,
      };
    }
  }

  event.frontmatter = {
    ...pluginFrontmatter,
    ...event.frontmatter,
  };
}
