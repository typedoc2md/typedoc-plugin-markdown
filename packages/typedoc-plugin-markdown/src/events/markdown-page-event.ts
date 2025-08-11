import {
  PageHeading,
  PageKind,
  ProjectReflection,
  Reflection,
  RouterTarget,
} from 'typedoc';

/**
 * Markdown page lifecycle event names used by the Markdown plugin.
 *
 * These constants are passed to {@link RendererHooks.on | renderer.hooks.on}
 * and {@link RendererHooks.emit | renderer.hooks.emit} to listen for or trigger
 * Markdown page rendering events.
 *
 * When an event fires, a {@link MarkdownPageEvent} object is passed
 * to the callback, providing access to the page contents and render state.
 */
export const MarkdownPageEventBack = {
  /**
   * Triggered before a document will be rendered.
   *
   * @event
   */
  BEGIN: 'beginPage',
  /**
   * Triggered after a document has been rendered, just before it is written to disc.
   *
   * @event
   */
  END: 'endPage',
} as const;

/**
 * An event emitted before and after the a page is rendered.
 *
 * @hideconstructor
 *
 * @event
 */
export class MarkdownPageEvent<out Model extends RouterTarget = RouterTarget> {
  /**
   * The project the renderer is currently processing.
   */
  project!: ProjectReflection;

  /**
   * The filename the page will be written to.
   */
  filename!: string;

  /**
   * The url this page will be located at.
   */
  url!: string;

  /**
   * The type of page this is.
   */
  pageKind!: PageKind;

  /**
   * The model that should be rendered on this page.
   */
  readonly model: Model;

  /**
   * The final html content of this page.
   *
   * Should be rendered by layout templates and can be modified by plugins.
   */
  contents: string = '';

  /**
   * The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.
   */
  frontmatter?: Record<string, any>;

  /**
   * Required for typing purposes but not used
   *
   * @internal
   */
  pageHeadings: PageHeading[] = [];

  /**
   * Required for typing purposes but not used
   *
   * @internal
   */
  pageSections = [
    {
      title: '',
      headings: this.pageHeadings,
    },
  ];

  /**
   * Required for typing purposes but not used
   *
   * @internal
   */
  startNewSection() {
    this.pageHeadings = [];
    this.pageSections = [];
  }

  /**
   * Triggered before a document will be rendered.
   * @event
   */
  static readonly BEGIN = 'beginPage';

  /**
   * Triggered after a document has been rendered, just before it is written to disc.
   * @event
   */
  static readonly END = 'endPage';

  constructor(model: Model) {
    this.model = model;
  }

  /**
   * Can be used to register asynchronous jobs that should be run before the page is written to disk.
   */
  preWriteAsyncJobs: Array<(page: MarkdownPageEvent) => Promise<void>> = [];

  /**
   * @internal
   */
  isReflectionEvent(): this is MarkdownPageEvent<Reflection> {
    return this.model instanceof Reflection;
  }
}
