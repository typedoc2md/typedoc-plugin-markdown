import { PageKind, ProjectReflection } from 'typedoc';

/**
 * An event emitted before and after the markdown of a page is rendered.
 *
 * @event
 */
export class MarkdownPageEvent<out Model = unknown> {
  /**
   * The {@linkcode typedoc!ProjectReflection ProjectReflection} instance the renderer is currently processing.
   */
  project!: ProjectReflection;

  /**
   * The model that that is being rendered on this page.
   * Either a {@linkcode typedoc!DeclarationReflection DeclarationReflection} or {@linkcode typedoc!ProjectReflection ProjectReflection}.
   */
  readonly model: Model;

  /**
   * The final markdown `string` content of the page.
   *
   * Should be rendered by layout templates and can be modified by plugins.
   */
  contents?: string;

  /**
   * The url this page will be located at.
   */
  url!: string;

  /**
   * The type of page this is.
   */
  pageKind!: PageKind;

  /**
   * The complete `string` filename where the file will be written..
   */
  filename!: string;

  /**
   * The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.
   */
  frontmatter?: Record<string, any>;

  // required for typing purposes but not used
  /** @hidden */
  pageHeadings: any;
  /** @hidden */
  pageSections: any;
  /** @hidden */
  startNewSection: any;

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
  constructor(model: Model) {
    this.model = model;
  }
}
