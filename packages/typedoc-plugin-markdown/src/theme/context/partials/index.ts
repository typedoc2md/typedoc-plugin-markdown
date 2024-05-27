/** The `partials` namespace holds the partials for the theme and are used by templates to map speficic models to page output.
 *
 * Please note that partials::
 *
 * - Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
 * - Can call other partials and helpers.
 * - Must return a string.
 *
 * Partials are categorised by their use:
 *
 * - Page Partials: Partials that render core page elements such as header and breadcrumbs.
 * - Container Partials: Partials that are used to render reflection groups and categories.
 * - Member Partials: Partials that render specific parts of reflections.
 * - Comment Partials: Partials that render comments.
 * - Type Partials: Partials that render specific TypeDoc model types.
 *
 * @module
 **/
export * from './_index';
