import { MarkdownRenderer } from '@app/application';
import { MarkdownPageEvent } from '@app/events/markdown-page-event';
import { OutputFileStrategy } from '@options/option-maps';
import { TextContentMappings } from '@options/option-types';
import { TEXT_MAPPING_DEFAULTS } from '@options/text-mappings';
import { RenderTemplate } from '@theme/theme-types';
import {
  DeclarationReflection,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  Theme,
} from 'typedoc';
import { getNavigation } from './core/get-navigation';
import { getUrls } from './core/get-urls';
import { MarkdownThemeRenderContext } from './render-context';

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
 * This code defines a new theme called "customTheme":
 *
 * ```ts
 * import { MarkdownAppication, MarkdownRenderer, MarkdownTheme, MarkdownThemeRenderContext } from "typedoc-plugin-markdown";
 *
 * export function load(app: MarkdownAppication) {
 *   app.renderer.defineTheme("customTheme", MyMarkdownTheme);
 * }
 *
 * class MyMarkdownTheme extends MarkdownTheme {
 *
 *   constructor(renderer: MarkdownRenderer) {
 *     super(renderer);
 *   }
 *
 *   // Return a new render context
 *   getRenderContext(page) {
 *    return new MyMarkdownThemeRenderContext(this, page, this.application.options);
 *   }
 *
 *   });
 * }
 * }
 *
 * class MyMarkdownThemeRenderContext extends MarkdownThemeRenderContext {
 *  ...
 * }
 * ```
 *
 * The theme can then be consumed by the `theme` option:
 *
 * ```shell
 * typedoc --plugin typedoc-plugin-markdown --theme customTheme
 * ```
 *
 * @category Custom Theme
 */
export class MarkdownTheme extends Theme {
  /**
   * The text content mappings for the theme. This is a combination of the default mappings and any mappings provided in the plugin options.
   *
   * @internal
   */
  readonly textContentMappings: Partial<TextContentMappings>;

  /**
   * @ignore
   */
  constructor(renderer: MarkdownRenderer) {
    super(renderer);
    this.textContentMappings = {
      ...TEXT_MAPPING_DEFAULTS,
      ...(this.application.options.getValue('textContentMappings') || {}),
    };
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
      return (
        template(page)
          .replace(/[\r\n]{3,}/g, '\n\n')
          .replace(/^\s+|\s+$/g, '') + '\n'
      );
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
    return new MarkdownThemeRenderContext(this, page, this.application.options);
  }

  /**
   * Maps the models of the given project to the desired output files.
   *
   * This method can be overriden to provide an alternative url structure.
   */
  getUrls(project: ProjectReflection) {
    return getUrls(this, project);
  }

  /**
   * Map the models of the given project to a navigation structure.
   *
   * This method can be overriden to provide an alternative navigation structure.
   */
  getNavigation(project: ProjectReflection) {
    return getNavigation(this, project);
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
  readmeTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.readme();
  };

  /**
   * @internal
   */
  projectTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.project();
  };

  /**
   * @internal
   */
  reflectionTemplate = (page: MarkdownPageEvent<DeclarationReflection>) => {
    return this.getRenderContext(page).templates.reflection();
  };
}
