import { MarkdownPageEvent } from '@plugin/events/index.js';
import { formatMarkdown } from '@plugin/libs/utils/index.js';
import {
  MarkdownThemeContext,
  NavigationBuilder,
} from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  DocumentReflection,
  PageKind,
  ProjectReflection,
  Reflection,
  Renderer,
  Router,
  Theme,
} from 'typedoc';

/**
 * The main theme class for the plugin.
 *
 * The class controls how TypeDoc models are mapped to files and templates and extends TypeDoc's base Theme class.
 *
 * You would typically only be interested in overriding the the theme's render context instance.
 *
 * The API follows the implementation of [TypeDoc's custom theming](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md) with some minor adjustments.
 */
export class MarkdownTheme extends Theme {
  router: Router;

  constructor(renderer: Renderer) {
    super(renderer);
    this.router = renderer.router!;
  }
  /**
   * Renders a template and page model to a string.
   */
  render(page: MarkdownPageEvent): string {
    const templateMapping: Record<string, (_: MarkdownPageEvent) => string> = {
      [PageKind.Index]: (event) =>
        this.indexTemplate(event as MarkdownPageEvent<ProjectReflection>),
      [PageKind.Document]: (event) =>
        this.documentTemplate(event as MarkdownPageEvent<DocumentReflection>),
      [PageKind.Hierarchy]: (event) =>
        this.hierarchyTemplate(event as MarkdownPageEvent<ProjectReflection>),
      [PageKind.Reflection]: (event) =>
        this.reflectionTemplate(
          event as MarkdownPageEvent<DeclarationReflection>,
        ),
    };

    const template = templateMapping[page.pageKind];

    if (!template) {
      throw new Error(
        `[typedoc-plugin-markdown]: ${page.pageKind} page kind not supported.`,
      );
    }

    if (!page.isReflectionEvent()) {
      throw new Error(
        `[typedoc-plugin-markdown]: The page model should be a reflection when rendering the "${page.pageKind}" page kind.`,
      );
    }

    return formatMarkdown(template(page));
  }

  getNavigation(project: ProjectReflection) {
    return new NavigationBuilder(this.router, this, project).getNavigation();
  }

  getRenderContext(page: MarkdownPageEvent<Reflection>) {
    return new MarkdownThemeContext(this, page, this.application.options);
  }

  indexTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.index(page);
  };

  reflectionTemplate = (page: MarkdownPageEvent<DeclarationReflection>) => {
    return this.getRenderContext(page).templates.reflection(page);
  };

  documentTemplate = (page: MarkdownPageEvent<DocumentReflection>) => {
    return this.getRenderContext(page).templates.document(page);
  };

  hierarchyTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.hierarchy(page);
  };
}
