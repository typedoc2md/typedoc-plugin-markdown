// @ts-check

/**
 * Export as CJS to ensure a fully synchronous module cache.
 *
 * This prevents "plugin loaded multiple times" errors when Docusaurus triggers a recompile.
 */
module.exports = {
  bootstrap: async (
    /** @type {import('typedoc').TypeDocOptions} */
    options,
  ) => {
    const typedoc = await import('typedoc');

    const app = await typedoc.Application.bootstrapWithPlugins(options, [
      new typedoc.TypeDocReader(),
      new typedoc.PackageJsonReader(),
      new typedoc.TSConfigReader(),
    ]);

    const project = await app.convert();

    // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
    if (!project) {
      return;
    }

    if (options.watch) {
      app.convertAndWatch(async (project) => {
        await app.generateOutputs(project);
      });
    } else {
      await app.generateOutputs(project);
    }
  },
};
