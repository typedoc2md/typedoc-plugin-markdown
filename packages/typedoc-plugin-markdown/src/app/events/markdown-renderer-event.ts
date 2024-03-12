/**
 * Extends the RendererEvent from TypeDoc to expose navigation property.
 */

import { MarkdownPageEvent } from '@plugin/app/events';
import {
  NavigationItem,
  RenderTemplate,
  UrlMapping,
} from '@plugin/theme/theme-types';
import * as path from 'path';
import { Event, ProjectReflection, Reflection } from 'typedoc';

export class MarkdownRendererEvent extends Event {
  readonly project: ProjectReflection;

  readonly outputDirectory: string;

  urls?: UrlMapping<Reflection>[];
  navigation: NavigationItem[];

  static readonly BEGIN = 'beginRender';
  static readonly END = 'endRender';

  /**
   * @hidden
   */
  constructor(
    name: string,
    outputDirectory: string,
    project: ProjectReflection,
  ) {
    super(name);
    this.outputDirectory = outputDirectory;
    this.project = project;
  }

  /**
   * @hidden
   */
  public createPageEvent<Model>(
    mapping: UrlMapping<Model>,
  ): [RenderTemplate<MarkdownPageEvent<Model>>, MarkdownPageEvent<Model>] {
    const event = new MarkdownPageEvent<Model>(
      MarkdownPageEvent.BEGIN,
      mapping.model,
    );
    event.project = this.project;
    event.url = mapping.url;
    event.filename = path.join(this.outputDirectory, mapping.url);
    return [mapping.template, event];
  }
}
