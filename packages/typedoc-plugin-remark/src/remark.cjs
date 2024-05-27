/**
 * Parses contents with Remark
 * - The remark eco-system is esm only, therefore we have to import its modules syncronously.
 * - In addition we don't want Typescript to transpile this file.
 */
module.exports = {
  parseContents: async (
    filePath,
    remarkStringifyOptions = {},
    userPlugins = [],
  ) => {
    const { remark } = await import('remark');
    const { read, writeSync } = await import('to-vfile');
    const file = await read(filePath);
    const processor = remark().data('settings', remarkStringifyOptions);
    const plugins = [
      ['remark-frontmatter', ['yaml']],
      'remark-gfm',
      'remark-mdx',
      ...userPlugins,
    ];
    const promises = plugins.map(async (plugin) => {
      return new Promise((resolve) => {
        const name = Array.isArray(plugin) ? plugin[0] : plugin;
        const options = Array.isArray(plugin) ? plugin[1] : {};
        import(name).then(({ default: pluginFn }) => {
          resolve({
            pluginFn,
            options,
          });
        });
      });
    });

    const pluginRefs = await Promise.all(promises);

    pluginRefs.forEach((pluginRef) => {
      processor.use(pluginRef.pluginFn, pluginRef.options);
    });
    await processor.process(file);

    writeSync(file);
  },
};
