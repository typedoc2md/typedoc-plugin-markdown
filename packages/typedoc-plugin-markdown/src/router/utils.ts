import { Reflection, ReflectionKind } from 'typedoc';

/**
 * The name a reflection's anchor is slugged from.
 *
 * Constructors are rendered under a heading of the localised kind name
 * ("Constructor", "Konstruktor", ...) rather than their reflection name, so
 * they are slugged from it too or their links break in other locales.
 */
export function getAnchorName(reflection: Reflection): string {
  return reflection.kindOf(ReflectionKind.Constructor)
    ? ReflectionKind.singularString(ReflectionKind.Constructor)
    : reflection.name;
}
