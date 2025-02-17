import { MarkdownPageEvent } from '@plugin/events/index.js';
import { formatMarkdown } from '@plugin/libs/utils/format-markdown.js';
import {
  MarkdownThemeContext,
  NavigationBuilder,
} from '@plugin/theme/index.js';
import { RenderTemplate } from '@plugin/types/theme.js';
import {
  DeclarationReflection,
  DocumentReflection,
  PageKind,
  ProjectReflection,
  Reflection,
  ReflectionCategory,
  ReflectionGroup,
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
  render(page: MarkdownPageEvent<Reflection>): string {
    const template = this.getTemplate(page) as RenderTemplate<
      MarkdownPageEvent<Reflection>
    >;
    return formatMarkdown(template(page));
  }

  getNavigation(project: ProjectReflection) {
    return new NavigationBuilder(this.router, this, project).getNavigation();
  }

  /**
   * Creates a new instance of the current theme context.
   *
   * This method can be overridden to provide an alternative theme context.
   */
  getRenderContext(page: MarkdownPageEvent<Reflection>) {
    return new MarkdownThemeContext(this, page, this.application.options);
  }

  documentTemplate = (page: MarkdownPageEvent<DocumentReflection>) => {
    return this.getRenderContext(page).templates.document(page);
  };

  readmeTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.readme(page);
  };

  reflectionTemplate = (page: MarkdownPageEvent<DeclarationReflection>) => {
    return this.getRenderContext(page).templates.reflection(page);
  };

  groupAndCategoryTemplate = (
    page: MarkdownPageEvent<DeclarationReflection>,
  ) => {
    return this.getRenderContext(page).templates.groupAndCategory(page);
  };

  private getTemplate(page: MarkdownPageEvent<Reflection>) {
    if (page.pageKind === PageKind.Index) {
      return this.readmeTemplate;
    }

    if (page.pageKind === PageKind.Document) {
      return this.documentTemplate;
    }

    if (
      page.model instanceof ReflectionCategory ||
      page.model instanceof ReflectionGroup
    ) {
      return this.groupAndCategoryTemplate;
    }

    return this.reflectionTemplate;
  }
}
