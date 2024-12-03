export function load(app) {
  app.renderer.markdownHooks.on(
    'index.page.begin',
    () => `---\ntitle: "test"\n---\n`,
  );
}
