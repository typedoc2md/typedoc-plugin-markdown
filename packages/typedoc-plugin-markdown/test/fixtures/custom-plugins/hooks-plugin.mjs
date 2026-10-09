// @ts-check

/**
 * Registers every renderer hook with a visible marker, so snapshots show
 * which hooks fire on which page.
 *
 * @param {import('../../../dist/index.js').MarkdownApplication} app
 */
export function load(app) {
  /** @type {const} */
  const hooks = [
    'page.begin',
    'page.end',
    'index.page.begin',
    'index.page.end',
    'content.begin',
    'content.end',
  ];
  hooks.forEach((hook) => {
    app.renderer.markdownHooks.on(hook, () => `[hook: ${hook}]`);
  });
}
