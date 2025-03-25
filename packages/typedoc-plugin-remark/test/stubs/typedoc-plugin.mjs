export function load(app) {
  app.renderer.markdownHooks.on(
    'page.begin',
    () => `---\ntitle: "test"\n---\n`,
  );
  app.renderer.markdownHooks.on(
    'index.page.begin',
    () => `---\ntitle: "test"\n---\n`,
  );
  app.renderer.markdownHooks.on('page.end', () => `> thanks @tgreyuk`);
  app.renderer.markdownHooks.on('index.page.end', () => `> thanks @tgreyuk`);
}
