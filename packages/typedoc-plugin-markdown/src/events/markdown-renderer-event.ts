import { NavigationJSON } from '@plugin/types/index.js';
import { PageDefinition, ProjectReflection } from 'typedoc';

/**
 * An event emitted at the beginning and end of the rendering process.
 *
 * @event
 */
export class MarkdownRendererEvent {
  /**
   * The project the renderer is currently processing.
   */
  readonly project: ProjectReflection;

  /**
   * The path of the directory the documentation should be written to.
   */
  readonly outputDirectory: string;

  /**
   * A list of all pages that will be generated.
   */
  pages: PageDefinition[];

  /**
   * The navigation structure of the project that can be utilised by plugins.
   */
  navigation?: NavigationJSON;

  /**
   * Triggered before the renderer starts rendering a project.
   * @event
   */
  static readonly BEGIN = 'beginRender';

  /**
   * Triggered after the renderer has written all documents.
   * @event
   */
  static readonly END = 'endRender';

  /**
   * @ignore
   */
  constructor(
    outputDirectory: string,
    project: ProjectReflection,
    pages: PageDefinition[],
  ) {
    this.outputDirectory = outputDirectory;
    this.project = project;
    this.pages = pages;
  }
}
