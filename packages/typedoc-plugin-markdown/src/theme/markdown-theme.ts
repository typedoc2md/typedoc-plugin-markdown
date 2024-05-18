import { MarkdownRenderer } from '@plugin/app/application';
import { MarkdownPageEvent } from '@plugin/app/events';
import { getTranslatable } from '@plugin/app/translatable';
import { formatMarkdown } from '@plugin/libs/utils';
import { OutputFileStrategy } from '@plugin/options';
import { RenderTemplate } from '@plugin/theme';
import {
  DeclarationReflection,
  DocumentReflection,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  Theme,
} from 'typedoc';
import { NavigationBuilder } from './core/navigation-builder';
import { UrlBuilder } from './core/url-builder';
import { MarkdownThemeContext } from './markdown-themecontext';

/**
 * The main theme class for the plugin.
 *
 * The class controls how TypeDoc models are mapped to files and templates and extends TypeDoc's base Theme class.
 *
 * You would typically only be interested in overriding the the theme's render context instance.
 *
 * The API follows the implementation of [TypeDoc's custom theming](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md) with some minor adjustments.
 *
 * @usage
 *
 * ```ts
 * export function load(app) {
 *   app.renderer.defineTheme('customTheme', MyMarkdownTheme);
 * }
 *
 * class MyMarkdownTheme extends MarkdownTheme {
 *  ...
 * }
 * ```
 *
 * @category Theme
 */
export class MarkdownTheme extends Theme {
  /**
   * The text content mappings for the theme. This is a combination of the default mappings and any mappings provided in the plugin options.
   *
   * @internal
   */

  /**
   * @ignore
   */
  constructor(renderer: MarkdownRenderer) {
    super(renderer);
    this.application.internationalization.addTranslations(
      'en',
      getTranslatable(this.application),
    );
  }

  /**
   * Renders a template and page model to a string.
   *
   * @internal
   */
  render(
    page: MarkdownPageEvent<Reflection>,
    template: RenderTemplate<MarkdownPageEvent<Reflection>>,
  ) {
    try {
      return formatMarkdown(template(page));
    } catch (e) {
      console.log(e);
      this.application.logger.error(`Error rendering page ${page.url}.`);
      throw new Error(e);
    }
  }

  /**
   * Creates a new instance of the current theme context.
   *
   * This method can be overridden to provide an alternative theme context.
   */
  getRenderContext(page: MarkdownPageEvent<Reflection>) {
    return new MarkdownThemeContext(this, page, this.application.options);
  }

  /**
   * Maps the models of the given project to the desired output files.
   *
   * This method can be overriden to provide an alternative url structure.
   */
  getUrls(project: ProjectReflection) {
    return new UrlBuilder(this, project).getUrls();
  }

  /**
   * Map the models of the given project to a navigation structure.
   *
   * This method can be overriden to provide an alternative navigation structure.
   */
  getNavigation(project: ProjectReflection) {
    return new NavigationBuilder(this, project).getNavigation();
  }

  /**
   * @internal
   */
  getTemplateMapping(
    kind: ReflectionKind,
    outputFileStrategy?: OutputFileStrategy,
  ) {
    outputFileStrategy =
      outputFileStrategy ||
      this.application.options.getValue('outputFileStrategy');

    const directoryName = (reflectionKind: ReflectionKind) => {
      const pluralString = ReflectionKind.pluralString(reflectionKind);
      return pluralString.replace(/[\s_-]+/g, '-').toLowerCase();
    };

    const membersWithOwnFile =
      this.application.options.getValue('membersWithOwnFile');

    const memberMapping = (
      template: (pageEvent: MarkdownPageEvent<any>) => string,
      kind: ReflectionKind,
    ) => {
      return {
        template,
        directory: directoryName(kind),
        kind: kind,
      };
    };
    const mappings = {
      [ReflectionKind.Module]: {
        template: this.reflectionTemplate,
        directory: null,
        kind: ReflectionKind.Module,
      },
      [ReflectionKind.Namespace]: {
        template: this.reflectionTemplate,
        directory: directoryName(ReflectionKind.Namespace),
        kind: ReflectionKind.Namespace,
      },
      [ReflectionKind.Document]: {
        template: this.documentTemplate,
        directory: directoryName(ReflectionKind.Document),
        kind: ReflectionKind.Document,
      },
    };

    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      (membersWithOwnFile as string[])?.includes(
        ReflectionKind[ReflectionKind.Class],
      )
    ) {
      mappings[ReflectionKind.Class] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Class,
      );
    }

    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      (membersWithOwnFile as string[])?.includes(
        ReflectionKind[ReflectionKind.Interface],
      )
    ) {
      mappings[ReflectionKind.Interface] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Interface,
      );
    }

    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      (membersWithOwnFile as string[])?.includes(
        ReflectionKind[ReflectionKind.Enum],
      )
    ) {
      mappings[ReflectionKind.Enum] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Enum,
      );
    }

    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      (membersWithOwnFile as string[])?.includes(
        ReflectionKind[ReflectionKind.Function],
      )
    ) {
      mappings[ReflectionKind.Function] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Function,
      );
    }

    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      (membersWithOwnFile as string[])?.includes(
        ReflectionKind[ReflectionKind.TypeAlias],
      )
    ) {
      mappings[ReflectionKind.TypeAlias] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.TypeAlias,
      );
    }

    if (
      outputFileStrategy === OutputFileStrategy.Members &&
      (membersWithOwnFile as string[])?.includes(
        ReflectionKind[ReflectionKind.Variable],
      )
    ) {
      mappings[ReflectionKind.Variable] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Variable,
      );
    }

    return mappings[kind];
  }

  /**
   * @internal
   */
  documentTemplate = (page: MarkdownPageEvent<DocumentReflection>) => {
    return this.getRenderContext(page).templates.document(page);
  };

  /**
   * @internal
   */
  readmeTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.readme(page);
  };

  /**
   * @internal
   */
  projectTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.project(page);
  };

  /**
   * @internal
   */
  reflectionTemplate = (page: MarkdownPageEvent<DeclarationReflection>) => {
    return this.getRenderContext(page).templates.reflection(page);
  };
}
