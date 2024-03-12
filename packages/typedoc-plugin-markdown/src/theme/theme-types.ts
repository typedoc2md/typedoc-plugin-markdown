import { MarkdownPageEvent } from '@plugin/app/events';

import { ReflectionKind } from 'typedoc';

export interface NavigationItem {
  title: string;
  url?: string;
  children?: NavigationItem[];
  isReadme?: boolean;
  isGroup?: boolean;
}

export interface TemplateMapping {
  directory: string | null;
  template: any;
  kind: ReflectionKind;
}

export interface UrlMapping<Model> {
  url: string;
  model: Model;
  template: RenderTemplate<MarkdownPageEvent<Model>>;
}

export type RenderTemplate<T> = (data: T) => string;
