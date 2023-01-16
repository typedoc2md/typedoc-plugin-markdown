import * as fs from 'fs';
import {
  BindOption,
  DeclarationReflection,
  PageEvent,
  Renderer,
  RendererEvent,
} from 'typedoc';
import { MarkdownTheme, TemplateMapping } from 'typedoc-plugin-markdown';
import { FrontMatterVars, prependYAML } from './front-matter';
import { CATEGORY_POSITION, getKindPlural } from './navigation';
import { FrontMatter, SidebarOptions } from './types';

export class DocusaurusTheme extends MarkdownTheme {
  @BindOption('sidebar')
  sidebar!: SidebarOptions;

  @BindOption('readmeTitle')
  readmeTitle!: string;

  @BindOption('indexSlug')
  indexSlug!: string;

  @BindOption('includeExtension')
  includeExtension!: string;

  @BindOption('frontmatter')
  frontmatter!: FrontMatter;

  constructor(renderer: Renderer) {
    super(renderer);

    this.listenTo(this.application.renderer, {
      [PageEvent.END]: this.onPageEnd,
      [RendererEvent.END]: this.onRendererEnd,
    });
  }

  onPageEnd(page: PageEvent<DeclarationReflection>) {
    if (page.contents) {
      page.contents = prependYAML(
        page.contents.replace(/\\</g, '<'),
        this.getYamlItems(page) as FrontMatterVars,
      );
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
        if (mapping) {
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

  getYamlItems(page: PageEvent<DeclarationReflection>): FrontMatter {
    const sidebarLabel = this.getSidebarLabel(page);
    const sidebarPosition = this.getSidebarPosition(page);
    let items: FrontMatter = {};
    if (page.url === this.entryDocument && this.indexSlug) {
      items = { ...items, slug: this.indexSlug };
    }
    if (this.sidebar.autoConfiguration) {
      if (sidebarLabel) {
        items = { ...items, sidebar_label: sidebarLabel as string };
      }
      if (sidebarPosition) {
        items = { ...items, sidebar_position: parseFloat(sidebarPosition) };
      }
    }

    if (page.url === page.project.url && this.entryPoints.length > 1) {
      items = { ...items, hide_table_of_contents: true };
    }
    items = { ...items, custom_edit_url: null };
    if (this.frontmatter) {
      items = { ...items, ...this.frontmatter };
    }
    return {
      ...items,
    };
  }

  getSidebarLabel(page: PageEvent<DeclarationReflection>) {
    const indexLabel =
      this.sidebar.indexLabel ||
      (this.entryPoints.length > 1 ? 'Table of Contents' : 'Exports');

    if (page.url === this.entryDocument) {
      return page.url === page.project.url
        ? indexLabel
        : this.sidebar.readmeLabel;
    }

    if (page.url === this.globalsFile) {
      return indexLabel;
    }

    return this.sidebar.fullNames ? page.model.getFullName() : page.model.name;
  }

  getSidebarPosition(page: PageEvent<DeclarationReflection>) {
    if (page.url === this.entryDocument) {
      return page.url === page.project.url ? '0.5' : '0';
    }
    if (page.url === this.globalsFile) {
      return '0.5';
    }
    if (page.model.getFullName().split('.').length === 1) {
      return '0';
    }
    return null;
  }

  get globalsFile() {
    return 'modules.md';
  }
}
