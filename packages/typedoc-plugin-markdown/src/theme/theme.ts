import {
  DeclarationReflection,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  RenderTemplate,
  Renderer,
  Theme,
} from 'typedoc';
import { OutputFileStrategy } from '../options/maps';
import { MarkdownPageEvent } from '../plugin/events';
import { UrlMapping } from '../plugin/url-mapping';
import { slugify } from '../support/utils';
import { NavigationItem, TemplateMapping } from './models';
import { NavigationContext } from './navigation-context';
import { MarkdownThemeRenderContext } from './render-context';
import { UrlsContext } from './urls-context';

/**
 * This is in-built MarkdownTheme which extends TypeDocs Theme class.
 * This follows the implementation of TypeDoc's [DefaultTheme](https://typedoc.org/api/classes/DefaultThemeRender.html).
 *
 * The {@link render } and {@link getUrls} methods is where the work happens.
 */
export class MarkdownTheme extends Theme {
  /**
   *
   * @param renderer The TypeDoc renderer instance the theme is attached to.
   */
  constructor(renderer: Renderer) {
    super(renderer);
  }

  getRenderContext(pageEvent: MarkdownPageEvent<Reflection> | null) {
    return new MarkdownThemeRenderContext(pageEvent, this.application.options);
  }

  getNavigationContext() {
    return new NavigationContext(this, this.application.options.getRawValues());
  }

  getUrlsContext(project: ProjectReflection) {
    return new UrlsContext(
      this,
      project,
      this.application.renderer,
      this.application.options,
    );
  }

  readmeTemplate = (pageEvent: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(pageEvent).readmeTemplate(pageEvent);
  };

  projectTemplate = (pageEvent: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(pageEvent).projectTemplate(pageEvent);
  };

  reflectionTemplate = (
    pageEvent: MarkdownPageEvent<DeclarationReflection>,
  ) => {
    return this.getRenderContext(pageEvent).reflectionTemplate(pageEvent);
  };

  memberTemplate = (pageEvent: MarkdownPageEvent<DeclarationReflection>) => {
    return this.getRenderContext(pageEvent).memberTemplate(pageEvent);
  };

  /**
   * Renders a template and page model to a string.
   */
  render(
    page: MarkdownPageEvent<Reflection>,
    template: RenderTemplate<MarkdownPageEvent<Reflection>>,
  ) {
    return template(page) as string;
  }

  getUrls(project: ProjectReflection): UrlMapping[] {
    return this.getUrlsContext(project).getUrls();
  }

  getNavigation(project: ProjectReflection): NavigationItem[] {
    return this.getNavigationContext().getNavigation(project);
  }

  /**
   * Returns the template mapping for a given reflection kind
   * @param kind
   */
  getTemplateMapping(
    kind: ReflectionKind,
    outputFileStrategyOverride?: OutputFileStrategy,
  ): TemplateMapping {
    const outputFileStrategy =
      outputFileStrategyOverride ||
      this.application.options.getValue('outputFileStrategy');

    const getDirectoryName = (reflectionKind: ReflectionKind) => {
      const pluralString = ReflectionKind.pluralString(reflectionKind);
      return slugify(pluralString).toLowerCase();
    };

    const membersWithOwnFile =
      this.application.options.getValue('membersWithOwnFile');

    const mappings = {
      [ReflectionKind.Module]: {
        template: this.reflectionTemplate,
        directory: null,
        kind: ReflectionKind.Module,
      },
      [ReflectionKind.Namespace]: {
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Namespace),
        kind: ReflectionKind.Namespace,
      },
    };

    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      membersWithOwnFile?.includes(ReflectionKind[ReflectionKind.Class])
    ) {
      mappings[ReflectionKind.Class] = {
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Class),
        kind: ReflectionKind.Class,
      };
    }
    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      membersWithOwnFile?.includes(ReflectionKind[ReflectionKind.Interface])
    ) {
      mappings[ReflectionKind.Interface] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Interface),
        kind: ReflectionKind.Interface,
      };
    }
    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      membersWithOwnFile?.includes(ReflectionKind[ReflectionKind.Enum])
    ) {
      mappings[ReflectionKind.Enum] = {
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Enum),
        kind: ReflectionKind.Enum,
      };
    }
    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      membersWithOwnFile?.includes(ReflectionKind[ReflectionKind.Function])
    ) {
      mappings[ReflectionKind.Function] = {
        template: this.memberTemplate,
        directory: getDirectoryName(ReflectionKind.Function),
        kind: ReflectionKind.Function,
      };
    }
    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      membersWithOwnFile?.includes(ReflectionKind[ReflectionKind.TypeAlias])
    ) {
      mappings[ReflectionKind.TypeAlias] = {
        template: this.memberTemplate,
        directory: getDirectoryName(ReflectionKind.TypeAlias),
        kind: ReflectionKind.TypeAlias,
      };
    }
    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      membersWithOwnFile?.includes(ReflectionKind[ReflectionKind.Variable])
    ) {
      mappings[ReflectionKind.Variable] = {
        template: this.memberTemplate,
        directory: getDirectoryName(ReflectionKind.Variable),
        kind: ReflectionKind.Variable,
      };
    }
    return mappings[kind];
  }
}
