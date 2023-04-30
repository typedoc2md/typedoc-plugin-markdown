import * as fs from 'fs';
import {
  Application,
  DeclarationReflection,
  MixedDeclarationOption,
  PageEvent,
  ParameterType,
  RendererEvent,
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
