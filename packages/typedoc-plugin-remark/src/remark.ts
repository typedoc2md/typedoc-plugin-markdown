import { remark } from 'remark';
import { read, writeSync } from 'to-vfile';

/**
 * Parses contents with Remark
 * - The remark eco-system is esm only, therefore we have to import its modules synchronously.
 * - In addition we don't want Typescript to transpile this file.
 */
export async function parseContents(
  filePath: string,
  remarkStringifyOptions = {},
  userPlugins = [],
) {
  const file = await read(filePath);
  const processor = remark().data('settings', remarkStringifyOptions);
  const plugins = [
    ['remark-frontmatter', ['yaml']],
    'remark-gfm',
    'remark-mdx',
    './normalize-tables.mjs',
    ...userPlugins,
  ];
  const promises = plugins.map(async (plugin) => {
    return new Promise((resolve) => {
      const name = Array.isArray(plugin) ? plugin[0] : plugin;
      const options = Array.isArray(plugin) ? plugin[1] : {};
      import(name as string).then(({ default: pluginFn }) => {
        resolve({
          pluginFn,
          options,
        });
      });
    });
  });

  const pluginRefs = await Promise.all(promises);

  pluginRefs.forEach((pluginRef: any) => {
    processor.use(pluginRef.pluginFn, pluginRef.options);
  });

  await processor.process(file);

  writeSync(file);
}
