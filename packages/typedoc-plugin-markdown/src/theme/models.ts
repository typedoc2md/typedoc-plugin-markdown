/**
 * Interfaces used by the theme.
 *
 * @module
 */

import { ReflectionKind } from 'typedoc';

export interface UrlOption {
  parentUrl?: string;
  directory?: string | null;
  forceDirectory?: boolean;
  directoryPosition: number;
  pagePosition: number;
}

export interface TemplateMapping {
  directory: string | null;
  template: any;
  kind: ReflectionKind;
}

export interface NavigationItem {
  title: string;
  url?: string;
  children?: NavigationItem[];
  isReadme?: boolean;
  isGroup?: boolean;
}
