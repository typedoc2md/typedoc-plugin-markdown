import { MarkdownPageEvent } from 'app/events';
import { OutputFileStrategy } from 'options/maps';
import { Options, ReflectionKind } from 'typedoc';

/**
 * The model used to define the package metadata when in packages mode.
 *
 */
export interface PackageMetaData {
  description: string;
  options: Options;
}

/**
 * The model used to define the URL mapping structure.
 *
 */
export interface UrlMapping</** @ignore */ Model> {
  url: string;
  model: Model;
  template: (data: MarkdownPageEvent<Model>) => string;
}

/**
 * The model used to define the navigation structure.
 *
 */
export interface NavigationItem {
  title: string;
  path?: string | null;
  kind?: ReflectionKind;
  children?: NavigationItem[];
}

export type RenderTemplate<T> = (data: T) => string;

export interface TemplateMapping {
  directory: string | null;
  template: any;
  kind: ReflectionKind;
}

export interface UrlOption {
  parentUrl?: string;
  directory?: string | null;
  forceDirectory?: boolean;
  outputFileStrategy?: OutputFileStrategy;
  entryModule?: string;
  entryFileName?: string;
}
