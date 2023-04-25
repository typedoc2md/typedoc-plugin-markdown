import * as prettier from 'prettier';
import {
  PageEvent,
  ProjectReflection,
  Reflection,
  RenderTemplate,
  Renderer,
  Theme,
} from 'typedoc';
import { MarkdownThemeConverterContext } from './theme-converter-context';
import { MarkdownThemeRenderContext } from './theme-render-context';

export class MarkdownTheme extends Theme {
  private _renderContext: MarkdownThemeRenderContext;
  private _converterContext: MarkdownThemeConverterContext;
  private _prettierOptions: prettier.Options | null;

  constructor(renderer: Renderer) {
    super(renderer);

    this.listenTo(this.owner, {
      [PageEvent.BEGIN]: this.onBeginPage,
    });
  }

  getRenderContext() {
    if (!this._renderContext) {
      this._renderContext = new MarkdownThemeRenderContext(
        this,
        this.application.options,
      );
    }
    return this._renderContext;
  }

  getConverterContext() {
    if (!this._converterContext) {
      this._converterContext = new MarkdownThemeConverterContext(
        this,
        this.application.options,
      );
    }
    return this._converterContext;
  }

  getPrettierOptions() {
    if (!this._prettierOptions) {
      this._prettierOptions = this.resolvePrettierOptions();
    }
    return this._prettierOptions;
  }

  resolvePrettierOptions() {
    const prettierFile = prettier.resolveConfigFile.sync();
    return prettierFile ? prettier.resolveConfig.sync(prettierFile) : null;
  }

  render(
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>,
  ): string {
    return prettier.format(template(page) as string, {
      ...this.getPrettierOptions(),
      parser: 'markdown',
    });
  }

  getUrls(project: ProjectReflection) {
    return this.getConverterContext().getUrls(project);
  }

  getNavigation(project: ProjectReflection) {
    return this.getConverterContext().getNavigation(project);
  }

  protected onBeginPage(page: PageEvent) {
    this.getRenderContext().activeLocation = page.url;
  }
}
