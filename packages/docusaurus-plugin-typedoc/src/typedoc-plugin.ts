import {
  Application,
  DeclarationReflection,
  MixedDeclarationOption,
  PageEvent,
  ParameterType,
  ReflectionKind,
} from 'typedoc';
import { FrontmatterEvent } from 'typedoc-plugin-frontmatter';
import { SidebarOptions } from './models';

export function loadDocusaurusTypedocPlugin(app: Application) {
  app.options.addDeclaration({
    name: 'sidebar',
    type: ParameterType.Mixed,
  } as MixedDeclarationOption);

  app.renderer.on(PageEvent.END, (page: PageEvent<DeclarationReflection>) => {
    if (page.contents) {
      page.contents = page.contents.replace(/\\</g, '<');
    }
  });

  app.renderer.on(
    FrontmatterEvent.PREPARE_FRONTMATTER,
    (event: FrontmatterEvent) => {
      const hasReadme = !app.options.getValue('readme').endsWith('none');
      const sidebar = app.options.getValue('sidebar') as SidebarOptions;
      const entryDocument = app.options.getValue('entryDocument') as string;
      const isEntryDocument = event.page?.url === entryDocument;
      const isIndexPage =
        event.page?.project.url === event.page.url && hasReadme;
      const isPackageModule =
        event.page.model.kindOf(ReflectionKind.Module) &&
        !Boolean((event.page.model?.parent as any).groups);

      let pluginFrontmatter: Record<string, any> = {};

      if (event.page.url !== entryDocument) {
        pluginFrontmatter = {
          ...pluginFrontmatter,
          title: event.page?.model?.name,
        };
      }

      if (
        isIndexPage ||
        (isPackageModule && !event.page.url.endsWith(entryDocument))
      ) {
        pluginFrontmatter = {
          ...pluginFrontmatter,
          title: sidebar.indexLabel,
          ...(sidebar.autoConfiguration && { sidebar_position: 0 }),
        };
      }

      if (isEntryDocument && sidebar.autoConfiguration) {
        if (sidebar.categoryLabel) {
          pluginFrontmatter = {
            ...pluginFrontmatter,
            sidebar_label: sidebar.categoryLabel,
          };
        }
        if (!Number.isNaN(sidebar.position)) {
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
    },
  );
}
