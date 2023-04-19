import * as fs from 'fs';
import {
  BindOption,
  DeclarationReflection,
  PageEvent,
  ReflectionKind,
  Renderer,
  RendererEvent,
} from 'typedoc';
import { MarkdownTheme, TemplateMapping } from 'typedoc-plugin-markdown';
import { SidebarOptions } from './models';

export class DocusaurusTheme extends MarkdownTheme {
  @BindOption('sidebar') sidebar!: SidebarOptions;

  constructor(renderer: Renderer) {
    super(renderer);

    this.listenTo(this.application.renderer, {
      [PageEvent.END]: this.onPageEnd,
      [RendererEvent.END]: this.onRendererEnd,
    });
  }

  onPageEnd(page: PageEvent<DeclarationReflection>) {
    if (page.contents) {
      page.contents = page.contents.replace(/\\</g, '<');
    }
  }

  onRendererEnd(renderer: RendererEvent) {
    if (this.sidebar.autoConfiguration) {
      this.writeCategoryYaml(
        renderer.outputDirectory,
        this.sidebar.categoryLabel,
        this.sidebar.position,
        this.sidebar.collapsed,
        false,
      );
      this.loopAndWriteCategories(renderer.outputDirectory);
    }
  }

  loopAndWriteCategories(path: string, level = 0) {
    const directory = fs.readdirSync(path);
    directory.forEach((segment) => {
      const fullPath = `${path}/${segment}`;
      const isDirectory = fs.lstatSync(fullPath).isDirectory();
      if (isDirectory) {
        const mapping = Object.entries(this.mappings)
          .filter((entry) => {
            return (entry[1] as TemplateMapping).directory === segment.slice(3);
          })
          .map((entry) => entry[1])[0] as TemplateMapping;
        const subdirectory = fs.readdirSync(fullPath);

        if (mapping && !subdirectory.includes(`${mapping?.directory}.md`)) {
          this.writeCategoryYaml(
            fullPath,
            ReflectionKind.pluralString(mapping.kind),
            null,
            true,
            true,
          );
        }
        this.loopAndWriteCategories(fullPath);
      }
    });
  }

  writeCategoryYaml = (
    categoryPath: string,
    label: string,
    position: number | null,
    collapsed: boolean,
    generatedIndex: boolean,
  ) => {
    const yaml: string[] = [`label: "${label}"`];
    if (position !== null) {
      yaml.push(`position: ${position}`);
    }
    if (!collapsed) {
      yaml.push(`collapsed: false`);
    }
    if (generatedIndex) {
      yaml.push(`link:
  type: "generated-index"
  title: "${label}"`);
    }
    if (fs.existsSync(categoryPath)) {
      fs.writeFileSync(categoryPath + '/_category_.yml', yaml.join('\n'));
    }
  };
}
