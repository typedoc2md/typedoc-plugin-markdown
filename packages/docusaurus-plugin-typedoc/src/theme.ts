import * as fs from 'fs';
import {
  BindOption,
  DeclarationReflection,
  PageEvent,
  Renderer,
  RendererEvent,
} from 'typedoc';
import { MarkdownTheme, TemplateMapping } from 'typedoc-plugin-markdown';
import { CATEGORY_POSITION, getKindPlural } from './navigation';
import { DocusaurusThemeRenderContext } from './theme-context';
import { SidebarOptions } from './types';

export class DocusaurusTheme extends MarkdownTheme {
  @BindOption('sidebar')
  sidebar!: SidebarOptions;

  private _contextCache?: DocusaurusThemeRenderContext;

  constructor(renderer: Renderer) {
    super(renderer);

    this.listenTo(this.application.renderer, {
      [PageEvent.END]: this.onPageEnd,
      [RendererEvent.END]: this.onRendererEnd,
    });
  }

  override getRenderContext() {
    this._contextCache ||= new DocusaurusThemeRenderContext(
      this,
      this.application.options,
    );
    return this._contextCache;
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
      );

      this.loopAndWriteCategories(renderer.outputDirectory);
    }
  }

  loopAndWriteCategories(path: string) {
    const directory = fs.readdirSync(path);
    directory.forEach((segment) => {
      const fullPath = `${path}/${segment}`;
      const isDirectory = fs.lstatSync(fullPath).isDirectory();
      if (isDirectory) {
        const mapping = Object.entries(this.mappings)
          .filter((entry) => {
            return (entry[1] as TemplateMapping).directory === segment;
          })
          .map((entry) => entry[1])[0] as TemplateMapping;
        const subdirectory = fs.readdirSync(fullPath);
        const containsDir = subdirectory.some((item) =>
          fs.lstatSync(`${fullPath}/${item}`).isDirectory(),
        );
        if (mapping && !containsDir) {
          this.writeCategoryYaml(
            fullPath,
            getKindPlural(mapping.kind),
            CATEGORY_POSITION[mapping.kind],
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
  ) => {
    const yaml: string[] = [`label: "${label}"`];
    if (position !== null) {
      yaml.push(`position: ${position}`);
    }
    if (!collapsed) {
      yaml.push(`collapsed: false`);
    }
    if (fs.existsSync(categoryPath)) {
      fs.writeFileSync(categoryPath + '/_category_.yml', yaml.join('\n'));
    }
  };
}
