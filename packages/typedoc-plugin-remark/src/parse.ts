import * as path from 'path';
import { remark } from 'remark';
import { read, writeSync } from 'to-vfile';
import { VFile } from 'vfile';
import { RemarkPlugin } from './types/options.js';

export async function parseMarkdownString(
  markdown: string,
  plugins: RemarkPlugin[],
  remarkStringifyOptions: Partial<any>,
): Promise<string> {
  const file = new VFile(markdown);

  const processor = remark().data('settings', remarkStringifyOptions);

  const promises = plugins.map(
    async (plugin) =>
      new Promise((resolve) => {
        const name = Array.isArray(plugin) ? plugin[0] : plugin;
        const isLocalPath = /^\.{1,2}\/|^\//.test(name as string);
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
      }),
  );

  const pluginRefs = await Promise.all(promises);

  pluginRefs.forEach((pluginRef: any) => {
    processor.use(pluginRef.pluginFn, pluginRef.options);
  });

  const processed = await processor.process(file);

  return String(processed);
}

export async function parse(
  filePath: string,
  plugins: RemarkPlugin[],
  remarkStringifyOptions: Partial<any>,
) {
  const file = await read(filePath);
  const processor = remark().data('settings', remarkStringifyOptions);
  const promises = plugins.map(
    async (plugin) =>
      new Promise((resolve) => {
        const name = Array.isArray(plugin) ? plugin[0] : plugin;
        const isLocalPath = /^\.{1,2}\/|^\//.test(name as string);
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
      }),
  );
  const pluginRefs = await Promise.all(promises);
  pluginRefs.forEach((pluginRef: any) => {
    processor.use(pluginRef.pluginFn, pluginRef.options);
  });
  await processor.process(file);
  writeSync(file);
}
