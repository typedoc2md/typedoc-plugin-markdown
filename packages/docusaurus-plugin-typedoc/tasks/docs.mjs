import { consola } from 'consola';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { read, writeSync } from 'to-vfile';

const timeStart = new Date().getTime();

consola.start('Updating docs...');

readmePage();

async function readmePage() {
  const file = await read('./README.md');
  const vfile = await remark()
    .use(remarkGfm)
    .use(remarkToc, { heading: 'Contents', maxDepth: 2 })
    .process(file);
  writeSync(vfile);
}

process.on('exit', function () {
  consola.success(
    `Finished updating docs in ${(
      (new Date().getTime() - timeStart) /
      1000
    ).toFixed(2)} seconds`,
  );
});
