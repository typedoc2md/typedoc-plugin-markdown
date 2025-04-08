import {
  Options,
  ReflectionCategory,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';

/**
 * The model used to define the package metadata when in packages mode.
 *
 */
export interface PackageMetaData {
  description: string;
  options: Options;
}

/**
 * The model used to define the navigation structure.
 *
 */
export interface NavigationItem {
  title: string;
  path?: string | null;
  kind?: ReflectionKind;
  isDeprecated?: boolean;
  children?: NavigationItem[];
}

/**
 * Defines the template type to use for rendering.
 */
export type RenderTemplate<T> = (data: T) => string;

export type MemberSection = ReflectionGroup | ReflectionCategory;
