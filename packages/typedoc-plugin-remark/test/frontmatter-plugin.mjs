export function load(app) {
  app.renderer.markdownHooks.on(
    'page.begin',
    () => `---\ntitle: "test"\n---\n`,
  );
}
