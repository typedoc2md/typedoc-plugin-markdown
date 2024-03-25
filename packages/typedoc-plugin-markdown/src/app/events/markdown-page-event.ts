import { Event, ProjectReflection, Reflection } from 'typedoc';

/**
 * An event emitted by before and after the markup of a page is rendered.
 *
 * @usage
 *
 * ```ts
 * export function load(app: MarkdownAppication) {
 *   app.renderer.on(MarkdownPageEvent.END, (event: MarkdownPageEvent) => {
 *    events.contents = event.contents.replace('foo', 'bar');
 *   });
 * });
 * ```
 *
 * @category Application
 */
export class MarkdownPageEvent<
  /** @ignore **/ Model = Reflection,
> extends Event {
  /**
   * The project the renderer is currently processing.
   */
  project!: ProjectReflection;

  /**
   * The model that should be rendered on this page.
   */
  readonly model: Model;

  /**
   * The final markdown content of this page.
   *
   * Should be rendered by layout templates and can be modified by plugins.
   */
  contents?: string;

  /**
   * The url this page will be located at.
   */
  url!: string;

  /**
   * The filename the page will be written to.
   */
  filename!: string;

  /**
   * The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.
   */
  frontmatter?: Record<string, any>;

  /**
   * This is required for typing purposes but is unused in the Markdown theme.
   * @hidden
   */
  pageHeadings: any;

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

  /**
   * @ignore
   */
  constructor(name: string, model: Model) {
    super(name);
    this.model = model;
  }
}
