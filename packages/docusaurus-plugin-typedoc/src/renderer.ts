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
  const isModulesPage = event.page?.url.endsWith(renderContext.modulesFile);
  const isPackagesPage = event.page?.url.endsWith(renderContext.packagesFile);
  const isReadmePage = event.page?.url.endsWith(
    app.options.getValue('entryDocument') as string,
  );
  const isPackageModule =
    event.page.model.kindOf(ReflectionKind.Module) &&
    !Boolean((event.page.model?.parent as any).groups);
  const model = event.page?.model;

  let pluginFrontmatter: Record<string, any> = {};

  if (sidebar.autoConfiguration) {
    // Add sidebar labels to all pages
    if (!isModulesPage && !isReadmePage) {
      const sidebarLabel =
        !model.kindOf(ReflectionKind.Module) &&
        !app.options.getValue('hideKindTag') &&
        app.options.getValue('excludeGroups')
          ? `(${Array.from(ReflectionKind.singularString(model.kind))[0]}) ${
              model?.name
            }`
          : model?.name;
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: sidebarLabel,
      };
    }
    // Entry url
    if (
      event.page?.url === app.options.getValue('entryDocument') ||
      (!hasReadme && isModulesPage)
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

    if (isModulesPage) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: sidebar.indexLabel,
      };
    }

    if (isPackageModule && isReadmePage) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: event.page.model.name,
      };
    }

    if (isPackagesPage) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: 'Packages',
      };
    }

    if (isPackageModule && isModulesPage && Boolean(event.page.model?.readme)) {
      pluginFrontmatter = {
        ...pluginFrontmatter,
        sidebar_label: sidebar.indexLabel,
      };
    }

    if (
      isPackageModule &&
      isModulesPage &&
      !Boolean(event.page.model?.readme)
    ) {
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
