/**
 * The pure functions used to compose markdown, exposed for use in custom themes.
 *
 * These are the same helpers the built-in templates and partials are written
 * with, so a partial copied from the default theme can be adapted without
 * also duplicating the escaping and formatting rules it depends on.
 *
 * They are re-exported from the package root as the `markdown` and `utils`
 * namespaces, and are also available on {@link MarkdownThemeContext} as
 * `this.markdown` and `this.utils`.
 *
 * @privateRemarks
 *
 * These modules are the public contract - each is deliberately an explicit
 * list rather than a re-export of `libs/markdown` and `libs/utils`, so that
 * adding a file to either folder does not silently widen the published API,
 * and so that the internal folder layout stays free to change.
 *
 * Anything added here should be a pure function with no dependency on plugin
 * internals (options, router, reflections). Utilities coupled to the render
 * pipeline stay unexported.
 *
 * @module
 */

export * as markdown from './public/markdown.js';
export * as utils from './public/utils.js';
