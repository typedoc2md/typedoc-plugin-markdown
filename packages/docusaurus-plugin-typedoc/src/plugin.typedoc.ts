import * as fs from 'fs';
import * as path from 'path';
import {
  Application,
  DeclarationReflection,
  MixedDeclarationOption,
  PageEvent,
  ParameterType,
  ReflectionGroup,
  RendererEvent,
  UrlMapping,
} from 'typedoc';
import { CategoryYamlOptions, SidebarOptions } from './models';

export function load(app: Application) {
  app.options.addDeclaration({
    name: 'sidebar',
    type: ParameterType.Mixed,
  } as MixedDeclarationOption);

  app.renderer.on(PageEvent.END, (page: PageEvent<DeclarationReflection>) => {
    if (page.contents) {
      page.contents = page.contents.replace(/\\</g, '<');
    }
  });

  app.renderer.postRenderAsyncJobs.push(async (renderer: RendererEvent) => {
    const sidebar = app.options.getValue('sidebar') as SidebarOptions;
    if (sidebar.autoConfiguration) {
      writeCategoryYaml({
        path: renderer.outputDirectory,
        label: sidebar.categoryLabel,
        position: sidebar.position,
        collapsed: sidebar.collapsed,
      });
    }

    const urlGroups = renderer.urls?.filter((urlMapping) => {
      return urlMapping.model instanceof ReflectionGroup;
    }) as UrlMapping<ReflectionGroup>[];

    urlGroups?.forEach((urlGroup) => {
      const groupUrl = path.join(renderer.outputDirectory, urlGroup.url);
      writeCategoryYaml({
        path: groupUrl,
        label: urlGroup.model.title,
        position: null,
        collapsed: sidebar.collapsed,
      });
    });

    app.logger.verbose(
      '[docusaurus-plugin-typedoc] _category_.yml files written' +
        renderer.outputDirectory,
    );
  });
}

function writeCategoryYaml(categoryYamlOptions: CategoryYamlOptions) {
  const yaml: string[] = [`label: "${categoryYamlOptions.label}"`];
  if (categoryYamlOptions.position !== null) {
    yaml.push(`position: ${categoryYamlOptions.position}`);
  }
  if (!categoryYamlOptions.collapsed) {
    yaml.push(`collapsed: false`);
  }
  if (fs.existsSync(categoryYamlOptions.path)) {
    fs.writeFileSync(
      categoryYamlOptions.path + '/_category_.yml',
      yaml.join('\n'),
    );
  }
}
