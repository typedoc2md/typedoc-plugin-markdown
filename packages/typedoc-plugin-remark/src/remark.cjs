/**
 * Parses contents with Remark
 * - The Remark eco-system is esm only, therefore we have to import its modules syncronously.
 * - In addition this file is a native as we don't want Typescript to transpile it into commonJs.
 */
module.exports = {
  parseContents: async (filePath, plugins = []) => {
    const { remark } = await import('remark');

    const { read, writeSync } = await import('to-vfile');
    const file = await read(filePath);

    const { default: remarkFrontmatter } = await import('remark-frontmatter');
    const { default: remarkGfm } = await import('remark-gfm');

    const processor = remark()
      .data('settings', { fences: true })
      .use(remarkFrontmatter)
      .use(remarkGfm);

    if (plugins.length > 0) {
      const promises = plugins.map(async (plugin) => {
        return new Promise((resolve, reject) => {
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
    }

    processor.processSync(file);

    writeSync(file);
  },
};
