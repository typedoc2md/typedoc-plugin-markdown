import { consola } from 'consola';
import { remark } from 'remark';
import remarkToc from 'remark-toc';
import { read, writeSync } from 'to-vfile';

main();

async function main() {
  const file = await remark()
    .use(remarkToc, { maxDepth: 3 })
    .process(await read('./CONTRIBUTING.md'));
  writeSync(file);

  consola.success(`Updated TOCs complete`);
}
