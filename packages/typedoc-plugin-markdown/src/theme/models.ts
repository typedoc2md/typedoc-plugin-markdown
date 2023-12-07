/**
 * Interfaces used by the theme.
 *
 * @module
 */

import { ReflectionKind } from 'typedoc';
import { OutputFileStrategy } from '../options/maps';

export interface UrlOption {
  parentUrl?: string;
  directory?: string | null;
  forceDirectory?: boolean;
  outputFileStrategy?: OutputFileStrategy;
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
