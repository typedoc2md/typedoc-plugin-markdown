import { MarkdownPageEvent } from '@app/events/markdown-page-event';
import { ReflectionKind } from 'typedoc';

/**
 * The model used to define the URL mapping structure.
 *
 * @category Custom Theme
 */
export interface UrlMapping</** @ignore */ Model> {
  url: string;
  model: Model;
  template: (data: MarkdownPageEvent<Model>) => string;
}

/**
 * The model used to define the navigation structure.
 *
 * @category Custom Theme
 */
export interface NavigationItem {
  title: string;
  url?: string | null;
  children?: NavigationItem[];
}

export type RenderTemplate<T> = (data: T) => string;

export interface TemplateMapping {
  directory: string | null;
  template: any;
  kind: ReflectionKind;
}
