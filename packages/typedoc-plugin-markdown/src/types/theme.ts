import {
  Options,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

/**
 * The model used to define the package metadata when in packages mode.
 */
export interface PackageMetaData {
  description: string;
  options: Options;
}

/**
 * The JSON representation of the navigation structure.
 */
export type NavigationJSON = NavigationItem[];

/**
 * The model used to define each navigation item.
 */
export interface NavigationItem {
  /**
   * The title of the navigation item.
   */
  title: string;
  /**
   * The path to the associated generated markdown file.
   */
  path?: string | null;
  /**
   * The kind of the reflection.
   */
  kind?: ReflectionKind;
  /**
   * Flag indicating whether the item is deprecated.
   */
  isDeprecated?: boolean;
  /**
   * Child navigation items if applicable.
   */
  children?: NavigationItem[];
}

/**
 * Defines the template type to use for rendering.
 */
export type RenderTemplate<T> = (data: T) => string;

export type MemberSection = ReflectionGroup | ReflectionCategory;

/**
 * The placeholders and arguments available for page title templates.
 */
export interface PageTitleTemplatePlaceholders {
  rawName: string;
  name: string;
  kind: string;
  group?: string;
  codeKeyword?: string;
  keyword?: string;
}
