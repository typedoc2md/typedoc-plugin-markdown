import {
  PageHeading,
  PageKind,
  ProjectReflection,
  Reflection,
  RouterTarget,
} from 'typedoc';

/**
 * An event emitted before and after the markdown of a page is rendered.
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
  contents?: string;

  /**
   * The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.
   */
  frontmatter?: Record<string, any>;

  // required for typing purposes but not used
  /** @hidden */
  pageHeadings: PageHeading[] = [];

  /** @hidden */
  pageSections = [
    {
      title: '',
      headings: this.pageHeadings,
    },
  ];

  /** @hidden */
  startNewSection(title: string) {
    this.pageHeadings = [];
    this.pageSections.push({
      title,
      headings: this.pageHeadings,
    });
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

  isReflectionEvent(): this is MarkdownPageEvent<Reflection> {
    return this.model instanceof Reflection;
  }
}
