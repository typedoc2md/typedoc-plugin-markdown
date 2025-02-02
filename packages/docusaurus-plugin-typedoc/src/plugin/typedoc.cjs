/**
 * Export as cjs to be compatible with esm
 */
module.exports = {
  bootstrap: async (options, postRenderCallbackFn) => {
    const typedoc = await import('typedoc');

    const app = await typedoc.Application.bootstrapWithPlugins(options, [
      new typedoc.TypeDocReader(),
      new typedoc.PackageJsonReader(),
      new typedoc.TSConfigReader(),
    ]);

    app.renderer.postRenderAsyncJobs.push(postRenderCallbackFn);

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
