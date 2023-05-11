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
  const isReadmePage = event.page?.url === renderContext.readmeFile;
  const isIndexPage = event.page?.url === event.page.project.url;

  const isPackageModule =
    event.page.model.kindOf(ReflectionKind.Module) &&
    !Boolean((event.page.model?.parent as any).groups);

  let pluginFrontmatter: Record<string, any> = {};

  if (!isReadmePage) {
    pluginFrontmatter = {
      ...pluginFrontmatter,
      title: event.page?.model?.name,
    };
  }

  if (
    isIndexPage ||
    (isPackageModule && !event.page.url.endsWith(renderContext.indexFile))
  ) {
    pluginFrontmatter = {
      ...pluginFrontmatter,
      title: sidebar.indexLabel,
    };
  }

  if (
    (isReadmePage ||
      (!hasReadme && isIndexPage) ||
      (isPackageModule && !event.page.url.endsWith(renderContext.indexFile))) &&
    sidebar.autoConfiguration
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
  event.frontmatter = {
    ...pluginFrontmatter,
    ...event.frontmatter,
  };
}
