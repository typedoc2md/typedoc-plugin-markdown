import * as path from 'path';
import { remark } from 'remark';
import { read, writeSync } from 'to-vfile';

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
      const isLocalPath =
        name !== './normalize-tables.mjs' &&
        /^\.{1,2}\/|^\//.test(name as string);
      const fullPath = isLocalPath
        ? path.resolve(process.cwd(), name as string)
        : name;
      const options = Array.isArray(plugin) ? plugin[1] : {};
      import(fullPath as string).then(({ default: pluginFn }) => {
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
